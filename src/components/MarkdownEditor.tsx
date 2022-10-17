import 'easymde/dist/easymde.min.css';
import { Controller } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
const mdeOptions = {
  spellChecker: false,
  toolbar: [
    'bold',
    'italic',
    'strikethrough',
    '|',
    'heading',
    'heading-smaller',
    'heading-bigger',
    '|',
    'unordered-list',
    'ordered-list',
    '|',
    'preview',
    'clean-block',
  ],
};

function MarkdownEditor(props) {
  const { control, name, rules, ...rest } = props;
  return (
    <Controller
      render={({ field }) => (
        <div className="dark:bg-white rounded-md text-black">
          <SimpleMDE {...rest} options={mdeOptions} value={field.value} onChange={(value) => field.onChange(value)} />
        </div>
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default MarkdownEditor;
