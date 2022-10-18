/// <reference types="react" />
import { SWRResponse } from 'swr';
import { EntryFieldProps } from '../components/EntryField';
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
    schema?: Properties;
    usedFields: [string, Property][];
    fields?: FieldsConfig;
    swrResponse: SWRResponse<Schema>;
}
export interface ValidField {
    schema: Property;
    config?: FieldConfig;
}
declare function useSchema(props: UseSchemaProps): UseSchemaReturn;
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
    }
];
export interface Schema {
    $schema: string;
    id: string;
    title: string;
    type: string;
    allOf: AllOf;
}
