import { BulletListExtension, OrderedListExtension } from '@remirror/extension-list';
import { Remirror, useRemirror, useRemirrorContext } from '@remirror/react';
import { forwardRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { htmlToProsemirrorNode, prosemirrorNodeToHtml } from 'remirror';
import {
  BoldExtension,
  DropCursorExtension,
  HeadingExtension,
  HistoryExtension,
  ImageExtension,
  ItalicExtension,
  LinkExtension,
  StrikeExtension,
  UnderlineExtension,
} from 'remirror/extensions';
import Button from '../Button';
import Tailbar from './Tailbar';

export interface EditorRef {
  setContent: (content: any) => void;
}

/* const extensions = () => [
  new BoldExtension(),
  new ItalicExtension(),
  new UnderlineExtension(),
  new StrikeExtension(),
  // new BulletListExtension(),
  // new OrderedListExtension(),
  new ImageExtension({ enableResizing: true }),
  new DropCursorExtension(),
  new LinkExtension({ autoLink: true }),
  // new HistoryExtension(),
  new HeadingExtension(),
]; */

const ImperativeHandle = forwardRef((_: unknown, ref: Ref<EditorRef>) => {
  const { setContent } = useRemirrorContext({
    autoUpdate: true,
  });
  // Expose content handling to outside
  useImperativeHandle(ref, () => ({ setContent }));
  return <></>;
});

const ProseEditor = (props: any) => {
  const { value: valueProp, onChange } = props as any;
  const editorRef = useRef<EditorRef | null>(null);
  const { manager, state, setState } = useRemirror({
    extensions: () => [],
    stringHandler: 'html',
    content: valueProp,
  });
  const internalValue = useRef<string>('');

  useEffect(() => {
    if (valueProp !== internalValue.current) {
      // console.log('value changed from outside', valueProp, value);
      const doc = htmlToProsemirrorNode({ content: valueProp, schema: state.schema });
      // https://remirror.io/docs/faq/#q-how-to-replace-the-content-in-the-editor
      editorRef.current!.setContent(doc);
      internalValue.current = valueProp;
    }
  }, [valueProp]);

  return (
    <div spellCheck={false}>
      <Remirror
        manager={manager}
        initialContent={state}
        classNames={[
          'border border-gray-200 rounded-md mt-2 prose p-2 prose-p:my-0 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary',
        ]}
        autoRender="end"
        onChange={(parameter) => {
          const html = prosemirrorNodeToHtml(parameter.state.doc);
          onChange(html || '');
          setState(parameter.state);
          // setValue(html);
          internalValue.current = html;
        }}
      >
        {/* <Tailbar /> */}
        <ImperativeHandle ref={editorRef} />
      </Remirror>
    </div>
  );
};

export default ProseEditor;

// wrap editor in react-hook-form controller

export function ProseInput(props: any) {
  const { control, label, secondaryLabel, name, defaultValue, rules } = props;
  return (
    <Controller
      render={({ field }) => <ProseEditor value={field.value} onChange={field.onChange} />}
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
    />
  );
}

export function ProseInputExample() {
  const { control, reset, watch } = useForm({ defaultValues: { prose: '<p>Hello</p>' } });
  const value = watch('prose');
  return (
    <div className="space-y-4">
      <Button
        onClick={() => {
          reset({
            prose: `<p>${Date.now()}</p>`,
          });
        }}
      >
        change from outside
      </Button>
      <ProseInput control={control} name="prose" />
      <div>
        <code>{value}</code>
      </div>
    </div>
  );
}
