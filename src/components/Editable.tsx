import { ArrowPathIcon, CheckIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { classNames } from '../util/classNames';

/** Wrapper component to create any type of editable content with a save button
 *
 * ```js
 * const [value, setValue] = useState('Hello World');
 * <Editable showSaveButton={true} onSave={() => doSomethingWith(value)}>
 *   <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
 * </Editable>;
 * ```
 */
export default function Editable(props: {
  /** place your form inside the element */
  children: React.ReactNode;
  /** if true, the save button is visible */
  showSaveButton?: boolean;
  /** called when the save button is clicked */
  onSave?: () => void;
}) {
  const { children, onSave, showSaveButton } = props;
  const [pending, setPending] = useState(false);
  async function handleSave() {
    if (!pending) {
      setPending(true);
      await onSave?.();
      setPending(false);
    }
  }
  // TODO: enter to save
  return (
    <div className="flex">
      {children}
      {showSaveButton && (
        <div className="p-1 cursor-pointer border border-gray-400 rounded-r-md hover:bg-gray-500" onClick={handleSave}>
          {!pending && <CheckIcon className="block h-7 w-7" />}
          {pending && <ArrowPathIcon className={classNames('block h-7 w-7', pending ? 'animate-spin' : '')} />}
        </div>
      )}
    </div>
  );
}
