import React, { Fragment, useEffect } from 'react';
import Form from '../components/Form';
import useEntryList, { UseEntryListProps } from '../hooks/useEntryList';
import DevNote from './DevNote';
import { EntryFieldProps, tokenizeType } from './EntryField';

export interface EntriesCheckerProps extends EntryFieldProps, Omit<UseEntryListProps, 'model'> {
  labelProperty?: string;
}

/** Checkboxes to select entries from a model, expects entryfield as returned from EntryForm.  */
function EntriesChecker(props: EntriesCheckerProps) {
  const {
    // EntryFieldProps
    field,
    form: { register },
    schema,
    // UseEntryListProps
    filterOptions = { _count: 50 },
    swrOptions,
    filter,
    // EntriesCheckerProps
    labelProperty = '_entryTitle',
  } = props;
  const [type, model] = tokenizeType(schema?.title || '');
  if (type !== 'entries') {
    return <DevNote>EntriesChecker can only be used with fields of type "entries".</DevNote>;
  }
  if (!model) {
    return (
      <DevNote>no model set for field "{field}". Make sure field has validation set to target model name.</DevNote>
    );
  }
  const { items: entries, data: entryList } = useEntryList({ model, filterOptions, filter, swrOptions });
  useEffect(() => {
    if (entryList && entryList.total > entryList.count) {
      console.warn(
        `EntriesChecker: more than ${entryList.count} entries found for field "${field}", model "${model}". Consider using a different field type.`,
      );
    }
  }, [entryList]);

  // TODO: find solution to prevent getting "false" istead of [] as value when there is only one unchecked entry
  // this happens because react-hook-form seems to only set an array of values if there are multiple checkboxes
  // this will totally break any forms where an EntriesChecker is used and the model has only 1 entry (or filter result returns 1 entry)
  // for a workaround, see MembershipScheduleForm formToEntry

  return (
    <>
      {!entries
        ? 'Laden...'
        : entries.map((entry, i) => (
            <Fragment key={i}>
              <label className="flex cursor-pointer items-center" key={i}>
                <Form.Checkbox className="mr-2" {...register(field)} value={entry.id} />
                {entry[labelProperty]}
              </label>
            </Fragment>
          ))}
    </>
  );
}

export default EntriesChecker;
