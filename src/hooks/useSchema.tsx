import { useMemo } from 'react';
import { SWRResponse } from 'swr';
import useSWRImmutable from 'swr/immutable';
import { EntryFieldProps } from '../components/EntryField';
import useSdk from './useSdk';

export interface UseSchemaProps {
  /** The target model */
  model: string;
  /** post for create, put for edit */
  type?: 'post' | 'put';
  /** config for which fields to use + additional config */
  fields?: FieldsConfig;
  /** if true, the fields object will not be memoized (could rais performance issues) */
  dynamicFields?: boolean;
}

export interface UseSchemaReturn {
  schema?: Properties; // datamanager schema properties
  usedFields: [string, Property][]; // fields that can be used in forms / lists. defaults to all custom fields of the model
  fields?: FieldsConfig; // given fields config, memoized if dynamicFields = true
  swrResponse: SWRResponse<Schema>; // raw swr reponse if needed (should not)
}

export interface ValidField {
  schema: Property;
  config?: FieldConfig;
}

function useSchema(props: UseSchemaProps): UseSchemaReturn {
  const { model, type = 'post', fields: fieldsProp, dynamicFields = false } = props;
  const { api } = useSdk();
  // this has to be immutable to make sure useEntryForm does not get reset when schema changes
  const swrResponse = useSWRImmutable<Schema>(api && model ? ['api.getSchema', model] : null, () =>
    api?.getSchema(model, type),
  );
  const { data } = swrResponse;
  const schema = data?.allOf?.[1]?.properties;

  let fields = useMemo(() => fieldsProp, []); // immutable prop (fields will always change => memo below is useless)
  if (dynamicFields) {
    fields = fieldsProp; // skip memo above..
  }

  const usedFields = useMemo<[string, Property][]>(() => {
    // schema not loaded yet
    if (!schema) {
      return [];
    }
    const userFields = Object.entries(schema || {}).filter(
      ([key]) => !key.startsWith('_') && !['id', 'private', 'created', 'creator', 'modified'].includes(key),
    );
    // custom fields object given
    if (fields) {
      // could also manually add these for lists / readonly fields in forms
      const allowedFields = userFields.map(([key]) => key).concat(['id', 'created', 'creator', 'modified']);
      const getField = (field: string): [string, Property] => [field, schema[field]];
      return Object.entries(fields).reduce((validFields: [string, Property][], [field]) => {
        // field is valid if found in schema.properties
        if (allowedFields.includes(field)) {
          return validFields.concat([getField(field)]); // yes the double array is needed
        }
        // show warnings + dont add field
        if (!allowedFields.includes(field)) {
          console.warn(
            `useSchema: given field "${field}" not found in schema for model "${model}". It will be omitted. 
        Must be one of: ${allowedFields.join(', ')}`,
          );
        }
        return validFields;
      }, []);
    }
    // use all custom fields of the model by default
    return userFields;
  }, [schema, fields]);
  return { schema, usedFields, fields, swrResponse };
}

export default useSchema;

export interface FieldConfig {
  label?: string;
  render?: (props: EntryFieldProps) => React.ReactNode;
  renderItem?: (props: EntryFieldProps) => React.ReactNode;
}

export interface FieldsConfig {
  [field: string]: FieldConfig;
}

export interface Property {
  description?: string;
  format?: string;
  readOnly?: boolean;
  title: string;
  type: string;
  default?: any;
}

export interface Properties {
  [key: string]: Property;
}

export declare type AllOf = [
  {
    $ref: string;
  },
  {
    additionalProperties: boolean;
    properties: Properties;
  },
];

export interface Schema {
  $schema: string;
  id: string;
  title: string;
  type: string;
  allOf: AllOf;
}
