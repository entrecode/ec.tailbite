import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { usePopper } from 'react-popper';
import useDocumentClick from '../hooks/useDocumentClick';
import dayjs from '../util/dayjs';
import Calendar from './Calendar';
import Form from './Form';

const dateFormat = 'DD.MM.YYYY';
const inputFormats = ['DD.MM.YYYY', 'D.M.YYYY', 'MM-DD-YYYY'];

/**
 *
 * Input field for a date. Either enter via keyboard or click a day
 *
 * ```js
 * <CalendarInput
 *   value={value}
 *   onChange={setValue}
 *   placeholder="Wann möchtest du mit dem Wassertaxi fahren?"
 * />
 * ```
 */
function CalendarInput({
  value: valueProp,
  onChange,
  placeholder,
}: {
  value?: string;
  onChange?: (value: string | null) => void;
  placeholder?: string;
}) {
  const [referenceElement, setReferenceElement] = useState();
  const inputRef = useRef<any>();
  const [container, setContainer] = useState<any>(null); // need this as state to make sure usePopper reruns
  const { styles, attributes } = usePopper(referenceElement, container, { placement: 'bottom-start' });
  const [inputValue, setInputValue] = useState<string | null>(valueProp ? dayjs(valueProp).format(dateFormat) : '');
  const [value, setValue] = useState(valueProp ? dayjs(valueProp).toISOString() : null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const date = dayjs(inputValue, inputFormats);
    if (date.isValid() || [null, ''].includes(inputValue)) {
      const v = date.isValid() ? date.toISOString() : null;
      setValue(v);
      onChange?.(v);
    } else {
      console.warn('input date not valid', date);
      // setValue(null);
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue(valueProp ? dayjs(valueProp).format(dateFormat) : null);
  }, [valueProp]);

  const documentClick = useCallback(
    (e) => {
      if (open && e.target !== inputRef.current && !(container as any)?.contains(e.target)) {
        setOpen(false);
      }
    },
    [open, container],
  );
  useDocumentClick(documentClick);

  return (
    <>
      <div ref={setReferenceElement as any}>
        <input
          type="text"
          value={inputValue || ''}
          placeholder={placeholder}
          ref={inputRef}
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          onChange={(e) => setInputValue(e.target.value)}
          className={Form.Item.text}
        />
      </div>
      {open && (
        <div ref={setContainer} {...attributes.popper} style={styles.popper} className="w-96 pt-2 z-50">
          <Calendar
            value={value}
            onChange={(day) => {
              if (day.isValid() || value === '') {
                setInputValue(day.isValid() ? day.format(dateFormat) : null);
                inputRef.current?.focus();
              } else {
                console.log('calendar date is not valid..', day);
              }
            }}
          />
        </div>
      )}
    </>
  );
}

export function DateInput(props: any) {
  const { placeholder, control, name, rules } = props;
  return (
    <Controller
      render={({ field }) => <CalendarInput placeholder={placeholder} value={field.value} onChange={field.onChange} />}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default CalendarInput;

export function CalendarInputExample() {
  return (
    <div className="max-w-md">
      <CalendarInput />
    </div>
  );
}
