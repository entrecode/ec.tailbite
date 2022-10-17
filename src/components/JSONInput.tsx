import * as JSONEditor from 'jsoneditor';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import Card from './Card';

/**
 * Renders a JSON Input and validates the Input
 */
export default function JSONInput({ value, onChange }: { value: any; onChange: (value: any) => void }) {
  const containerRef = useRef<any>();
  const editorRef = useRef<any>();

  const options = {
    mode: 'text',
    search: false,
    enableSort: false,
    enableTransform: false,
    statusBar: false,
    mainMenuBar: false,
    onChange: () => {
      try {
        const value = editorRef.current.get();
        // console.log('change', value); // , editorRef.current.getText()
        onChange?.(value);
      } catch (error) {
        // console.log('parse error');
      }
    },
  };
  useLayoutEffect(() => {
    if (!editorRef.current || JSON.stringify(value) !== JSON.stringify(editorRef.current.get())) {
      // console.log('value changed from outside', value);
      containerRef.current.textContent = '';
      // @ts-ignore
      editorRef.current = new JSONEditor(containerRef.current, options);
      editorRef.current.update(value || '');
      // editorRef.current.set(value);
      // editorRef.current.setSchema(schema [,schemaRefs])
    }
  }, [value]);

  return <div ref={containerRef} />;
}

export function JSONInputController(props: any) {
  const { control, name, rules, ...pickerProps } = props;
  return (
    <Controller
      render={({ field }) => <JSONInput value={field.value} onChange={field.onChange} {...pickerProps} />}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export function JSONInputExample() {
  const [value, setValue] = useState({});
  return (
    <Card className="max-w-md">
      <JSONInput value={value} onChange={setValue} />
      <pre className="p-2">{JSON.stringify(value, null, 2)}</pre>
    </Card>
  );
}
