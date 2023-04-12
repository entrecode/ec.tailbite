import { BulletListExtension, OrderedListExtension } from '@remirror/extension-list';
import { HistoryExtension } from '@remirror/extension-history';
import { HeadingExtension } from '@remirror/extension-heading';
import { ImageExtension } from '@remirror/extension-image';
import { LinkExtension } from '@remirror/extension-link';
import { DropCursorExtension } from '@remirror/extension-drop-cursor';
import { Remirror, useRemirror, useRemirrorContext } from '@remirror/react';
import { forwardRef, Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { htmlToProsemirrorNode, prosemirrorNodeToHtml } from 'remirror';
import { BoldExtension, ItalicExtension, UnderlineExtension, StrikeExtension } from 'remirror/extensions';
import Button from '../Button';
import Tailbar from './Tailbar';
import { WithSrc } from '../ImageAddModal';
import getFileUrl from '../../util/fileUrl';

export interface EditorRef {
  setContent: (content: any) => void;
}

const extensions = () => [
  new BoldExtension(),
  new ItalicExtension(),
  new UnderlineExtension(),
  new StrikeExtension(),
  new BulletListExtension(),
  new OrderedListExtension(),
  new ImageExtension({ enableResizing: true }),
  new DropCursorExtension(),
  new LinkExtension({ autoLink: true }),
  new HistoryExtension(),
  new HeadingExtension(),
];

const ImperativeHandle = forwardRef((_: unknown, ref: Ref<EditorRef>) => {
  const { setContent } = useRemirrorContext({
    autoUpdate: true,
  });
  // Expose content handling to outside
  useImperativeHandle(ref, () => ({ setContent }));
  return <></>;
});

declare interface ProseEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageAdd: (files: File[]) => Promise<WithSrc[]>;
}

const ProseEditor = (props: ProseEditorProps) => {
  const { value: valueProp, onChange, onImageAdd } = props as any;
  const editorRef = useRef<EditorRef | null>(null);
  const { manager, state, setState } = useRemirror({
    extensions,
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
          'w-full max-w-full min-h-16 border border-gray-200 rounded-md mt-2 prose p-2 prose-p:my-0 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary',
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
        <Tailbar onImageAdd={onImageAdd} />
        <ImperativeHandle ref={editorRef} />
      </Remirror>
    </div>
  );
};

export default ProseEditor;

// wrap editor in react-hook-form controller

export function ProseInput(props: any) {
  const { control, label, secondaryLabel, name, defaultValue, rules, onImageAdd } = props;
  return (
    <Controller
      render={({ field }) => <ProseEditor value={field.value} onChange={field.onChange} onImageAdd={onImageAdd} />}
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
      <ProseInput
        control={control}
        name="prose"
        onImageAdd={async (files) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const _urls = await Promise.all(files.map((file) => getFileUrl(file)));
          return _urls.map((src) => ({ src }));
        }}
      />
      <div>
        <code>{value}</code>
      </div>
    </div>
  );
}
