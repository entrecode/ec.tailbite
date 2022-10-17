import React, { Fragment, useMemo } from 'react';
import { EntryFieldProps } from '../components/EntryField';
import Form from '../components/Form';
import { useRoles } from '../hooks/useAppsite';
import useBackends from '../hooks/useBackends';

// model group, field hectorGroups, spits out string array of <backendID>$<groupName>
function GroupsHectorInput(props: EntryFieldProps) {
  const { data: roles } = useRoles();
  const { backends } = useBackends();
  const {
    field,
    form: { register },
  } = props;
  const rolesByBackend: { [key: string]: string[] } = useMemo(
    () =>
      roles?.reduce((acc, role) => {
        const [backendId, name] = role.split('$');
        return {
          ...acc,
          [backendId]: (acc[backendId] || []).concat([name]),
        };
      }, {}),
    [roles],
  );
  return (
    <Form.Item>
      {!backends || !roles
        ? 'Lade Gruppen...'
        : Object.entries(rolesByBackend).map(([backendId, backendRoles]) => (
            <Fragment key={backendId}>
              <Form.Item.Label>{backends[backendId]} Gruppen</Form.Item.Label>
              <Form.Item.Body className="space-y-1">
                {backendRoles.map((role, i) => (
                  <label className="flex cursor-pointer dark:text-gray-300 text-sm" key={i}>
                    <Form.Checkbox className="mr-2" {...register(field)} value={`${backendId}$${role}`} />
                    {role}
                  </label>
                ))}
              </Form.Item.Body>
            </Fragment>
          ))}
    </Form.Item>
  );
}

export default GroupsHectorInput;
