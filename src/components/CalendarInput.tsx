import { Dayjs } from 'dayjs';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { usePopper } from 'react-popper';
import useDocumentClick from '../hooks/useDocumentClick';
import dayjs, { isStrictlyValid } from '../util/dayjs';
import Button from './Button';
import Calendar from './Calendar';
import Form from './Form';

const formatDay = (day: Dayjs, outputFormat?: string) => {
  if (!outputFormat) {
    return day.toISOString();
  }
  return day.format(outputFormat);
};

const getValue = (input: string, inputFormat: string, outputFormat?: string): string | null => {
  if (input === '') {
    return null;
  }
  const day = dayjs(input, inputFormat);
  if (!isStrictlyValid(input, inputFormat)) {
    return input;
  }
  return formatDay(day, outputFormat);
};

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
  format,
  onChange,
  placeholder,
  inputFormat = 'DD.MM.YYYY',
}: {
  value: string | null;
  format?: string; // if not set, iso is assumed
  inputFormat?: string; // the format for typing in
  onChange?: (value: string | null) => void;
  placeholder?: string;
}) {
  const [referenceElement, setReferenceElement] = useState();
  const inputRef = useRef<any>();
  const [container, setContainer] = useState<any>(null); // need this as state to make sure usePopper reruns
  const { styles, attributes } = usePopper(referenceElement, container, { placement: 'bottom-start' });
  const [value, setValue] = useState(valueProp);
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
    // use empty string for nullish values
    if ([null, undefined, ''].includes(value)) {
      return '';
    }
    if (isStrictlyValid(value, format)) {
      return dayjs(value, format).format(inputFormat);
    }
    return value; // invalid value while typing
  }, [value]);

  // we need to iso version of the current value for Calendar
  const isoValue = useMemo(() => (isStrictlyValid(value, format) ? dayjs(value, format).toISOString() : null), [value]);

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
            const newValue = getValue(e.target.value, inputFormat, format);
            setValue(newValue);
            onChange?.(newValue);
          }}
          className={Form.Item.text}
        />
      </div>
      {open && (
        <div ref={setContainer} {...attributes.popper} style={styles.popper} className="w-96 pt-2 z-50">
          <Calendar
            value={isoValue}
            onChange={(day) => {
              if (day.isValid() || value === '') {
                inputRef.current?.focus();
                const newValue = formatDay(day, format);
                setValue(newValue);
                onChange?.(newValue);
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
  const { placeholder, control, name, rules, format, inputFormat } = props;
  return (
    <Controller
      render={({ field }) => (
        <CalendarInput
          placeholder={placeholder}
          value={field.value}
          onChange={(value) => field.onChange(value)}
          format={format}
          inputFormat={inputFormat}
        />
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default CalendarInput;

export function CalendarInputExample() {
  const [iso, setISO] = useState<string | null>(dayjs().toISOString());
  const [nullish, setNullish] = useState<string | null>(null);
  const [ddmmyyyy, setDdmmyyyy] = useState<string | null>('26.01.2023');
  const [yyyymmdd, setYyyymmdd] = useState<string | null>('2023-01-26');
  return (
    <div className="max-w-md">
      <h3>With null: {nullish}</h3>
      <CalendarInput value={nullish} onChange={(v) => setNullish(v)} />
      <h3>With ISO String: {iso}</h3>
      <CalendarInput value={iso} onChange={(v) => setISO(v)} />
      <h3>With DD.MM.YYYY: {ddmmyyyy}</h3>
      <CalendarInput value={ddmmyyyy} onChange={(v) => setDdmmyyyy(v)} format="DD.MM.YYYY" />
      <h3>With YYYY-MM-DD: {yyyymmdd}</h3>
      <CalendarInput value={yyyymmdd} onChange={(v) => setYyyymmdd(v)} format="YYYY-MM-DD" />
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
      null: null,
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
      <h3>With time:</h3>
      <DateInput control={control} name="date" inputFormat="DD.MM.YYYY HH:mm" />
    </div>
  );
}
