import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { usePopper } from 'react-popper';
import useDocumentClick from '../hooks/useDocumentClick';
import dayjs from '../util/dayjs';
import Button from './Button';
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
  const [value, setValue] = useState(valueProp ? dayjs(valueProp).toISOString() : null);
  const [open, setOpen] = useState(false);

  // update internal value when valueProp changes from outside
  useEffect(() => {
    setValue((value) => {
      if (valueProp !== value) {
        return valueProp ?? null;
      }
      return value;
    });
  }, [valueProp]);

  // update inputValue when internal value changes
  const inputValue = useMemo(() => {
    if ([null, undefined, ''].includes(value)) {
      return '';
    }
    const day = dayjs(value);
    // only accept if value is a well formatted iso string
    if (day.isValid() && day.toISOString() === value) {
      return day.format(dateFormat);
    }
    return value; // invalid value while typing
  }, [value]);

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
          onChange={(e) => {
            const day = dayjs(e.target.value, 'DD.MM.YYYY');
            if (day.isValid()) {
              console.log('valid', e.target.value);
              setValue(day.toISOString());
            } else {
              console.log('invalid', e.target.value);
              setValue(e.target.value);
            }
          }}
          className={Form.Item.text}
        />
      </div>
      {open && (
        <div ref={setContainer} {...attributes.popper} style={styles.popper} className="w-96 pt-2 z-50">
          <Calendar
            value={value}
            onChange={(day) => {
              if (day.isValid() || value === '') {
                inputRef.current?.focus();
                setValue(day.toISOString());
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
      render={({ field }) => (
        <CalendarInput placeholder={placeholder} value={field.value} onChange={(value) => field.onChange(value)} />
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default CalendarInput;

export function CalendarInputExample() {
  const [value, setValue] = useState<string | null>(dayjs().toISOString());
  return (
    <div className="max-w-md">
      <CalendarInput value={value ?? undefined} onChange={(v) => setValue(v)} />
    </div>
  );
}
export function DateInputExample() {
  const { control, watch, reset } = useForm({
    /* defaultValues: {
      date: dayjs().toISOString(),
    }, */
  });
  useEffect(() => {
    reset({
      date: dayjs().toISOString(),
    });
  }, []);
  const date = watch('date');

  return (
    <div className="max-w-md">
      <Button
        onClick={() => {
          reset({ date: dayjs(date).add(1, 'day').toISOString() });
        }}
      >
        + 1
      </Button>
      {date}
      <DateInput control={control} name="date" />
    </div>
  );
}
