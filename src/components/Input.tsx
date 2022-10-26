import { ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import tw from 'tailwind-styled-components';
import { classNames } from '../util/classNames';
import Button from './Button';
import Editable from './Editable';

const Input: any = forwardRef<any>((props: any, ref) => {
  const { className = '' } = props;

  return (
    <input
      ref={ref}
      {...props}
      className={classNames(
        `block shadow-sm 
        focus:ring-primary
        text-primary accent-current
        sm:text-sm
        disabled:bg-gray-200 
        disabled:dark:bg-gray-900 
        border-gray-300 dark:border-gray-500 rounded-md 
        dark:bg-gray-700`,
        !['radio', 'checkbox'].includes(props.type) && 'w-full',
        className,
      )}
    />
  );
});

Input.Textarea = forwardRef<any>((props, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={`block w-full shadow-sm 
      focus:ring-primary focus:border-primary 
      sm:text-sm 
      border-gray-300 dark:border-gray-500 rounded-md 
      dark:bg-gray-700`}
    />
  );
});

Input.Copy = forwardRef<any>((props: any, ref: any) => {
  const { children, className, ...rest } = props;
  const fieldRef = useRef<any>();
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center">
      <Input
        ref={(r) => {
          fieldRef.current = r;
          if (typeof ref === 'function') ref(r);
        }}
        className={classNames('flex-1', className, 'rounded-r-none')}
        {...rest}
      />
      <Button
        className="rounded-l-none"
        $secondary
        onClick={() => {
          navigator.clipboard.writeText(fieldRef.current?.value);
          setCopied(true);
        }}
      >
        <ClipboardDocumentIcon className={classNames('w-5 h-5', copied && 'text-green-500')} />
      </Button>
    </div>
  );
});

Input.Radio = forwardRef<any>((props: any, ref) => {
  const { children, ...rest } = props;
  return (
    <label className="flex space-x-2 items-center cursor-pointer py-2 px-1">
      <Input ref={ref} type="radio" className="aspect-1" {...rest} />
      <div>{children}</div>
    </label>
  );
});

Input.Select = forwardRef<any>((props: any, ref) => {
  return (
    <select
      {...props}
      ref={ref}
      className={classNames(
        'bg-white dark:bg-gray-700 relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
        props.className,
      )}
    >
      {props.children}
    </select>
  );
});

Input.InlineLabel = forwardRef<any>((props: any, ref) => {
  const { className, label, $right, ...inputProps } = props;
  const l = (
    <span
      className={classNames(
        'inline-flex items-center px-3 border border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-600 text-gray-500 dark:text-gray-100 sm:text-sm',
        !$right ? 'rounded-l-md  border-r-0' : 'rounded-r-md  border-l-0',
      )}
    >
      {label}
    </span>
  );
  return (
    <div className={classNames('max-w-lg flex rounded-md shadow-sm', className)}>
      {!$right && l}
      <input
        ref={ref}
        className={classNames(
          'flex-1 block w-full min-w-0 rounded-none focus:ring-primary focus:border-primary sm:text-sm border-gray-300 dark:border-gray-500 dark:bg-gray-700',
          !$right ? 'rounded-r-md' : 'rounded-l-md',
        )}
        {...inputProps}
      />
      {$right && l}
    </div>
  );
});

Input.Color = forwardRef<any>((props: any, ref) => {
  return <input type="color" ref={ref} {...props} />;
});

Input.WithIcon = tw.div`relative rounded-md shadow-sm`;
Input.Icon = tw.div`absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none`;
Input.Editable = forwardRef(({ value: valueProp, onSave, placeholder }: any, ref: any) => {
  const [value, setValue] = useState('');
  const isDirty = value !== valueProp;
  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);
  return (
    <Editable showSaveButton={isDirty} onSave={() => onSave?.(value)}>
      <Input
        ref={ref}
        type="text"
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
        className={classNames(isDirty ? 'rounded-none rounded-l-md' : 'rounded-md')}
        placeholder={placeholder}
      />
    </Editable>
  );
});

export default Input;
