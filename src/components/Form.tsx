import React, { forwardRef } from 'react';
import tw from 'tailwind-styled-components';
import { classNames } from '../util/classNames';
import { remove, swap } from '../util/form';
import Card from './Card';
import Draggable from './Draggable';
import { FieldErrorMessage } from './FieldErrorMessage';
import Ixo from './Ixo';
import Tooly from './Tooly';

declare type ItemProps = {
  /** if true, the item will have no top border */
  $first?: boolean;
  /** if true, the label will be rendered above the input, instead of left to it */
  $dense?: boolean;
  /** additional classNames */
  className?: string;
  /** contents */
  children?: React.ReactNode;
};

// https://stackoverflow.com/questions/60883388/using-dot-notation-with-functional-component-in-typescript
const Form: any = tw.div`space-y-6 sm:space-y-5`;

// https://tailwindui.com/components/application-ui/forms/form-layouts

export const FormItem = (props: ItemProps) => (
  <div
    className={classNames(
      !props.$first && 'sm:border-t sm:border-gray-200 dark:sm:border-gray-600 sm:pt-5',
      props.$dense ? 'flex flex-col space-y-2' : 'sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start ',
      props.className,
    )}
  >
    {props.children}
  </div>
);
Form.Item = FormItem;

Form.Item.Label = tw.label`
block text-sm font-medium text-gray-700 dark:text-gray-300
`; // sm:mt-px sm:pt-2

Form.Item.Body = tw.div`
mt-1 sm:mt-0 sm:col-span-2
`;
Form.Item.Caption = tw.p`text-xs text-gray-500 dark:text-gray-400`;

Form.Textarea = forwardRef<any>((props, ref) => {
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

Form.Checkbox = forwardRef<any>((props: any, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type="checkbox"
      className={classNames(
        'border-gray-300 dark:border-gray-500 rounded text-primary focus:ring-primary dark:bg-gray-700',
        props.className,
      )}
    />
  );
});

Form.Item.Checkbox = forwardRef<any>((props: any, ref) => {
  const { children, label, caption = '' } = props;
  return (
    <label className="relative flex items-start cursor-pointer">
      <div className="flex items-center h-5">{children}</div>
      <div className="ml-3 text-sm">
        <div className="font-medium text-gray-700 dark:text-gray-300">{label}</div>
        {caption && <p className="text-gray-500 dark:text-gray-400">{caption}</p>}
      </div>
    </label>
  );
});

Form.Item.Draggable = ({ children, name, form, index, onSwap, removable = true }: any) => {
  return (
    <Card.Nested>
      <Draggable type="benefit" index={index} onDrop={swap(name, form, onSwap)}>
        {(drag) => (
          <Card.Nested className="flex justify-between">
            <div className="p-2 w-full">{children}</div>
            <div className={removable ? '' : 'flex items-center'}>
              <div ref={drag} className="cursor-move p-2">
                <Ixo icon="drag-handle" />
              </div>
              {removable && (
                <button onClick={() => remove(name, form, index)} className="p-2">
                  <Tooly label="entfernen" placement="left">
                    <Ixo icon="close" />
                  </Tooly>
                </button>
              )}
            </div>
          </Card.Nested>
        )}
      </Draggable>
    </Card.Nested>
  );
};

Form.Checkbox.Label = tw.label`flex space-x-2 items-center`;

Form.Radio = forwardRef<any>((props: any, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type="radio"
      className={classNames(
        'border-gray-300 dark:border-gray-500 rounded-full text-primary focus:ring-primary dark:bg-gray-700',
        props.className,
      )}
    />
  );
});

// dont use this, use Input component instead! TODO: refactor
Form.Item.text = `
block w-full shadow-sm 
focus:ring-primary focus:border-primary 
sm:text-sm 
border-gray-300 dark:border-gray-500 rounded-md 
dark:bg-gray-700
`;

Form.Sections = ({ children }) => <div className="space-y-6 pt-6 mb-6">{children}</div>;

Form.Section = ({ children }) => (
  <div className="bg-slate-50 dark:bg-slate-600 shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">{children}</div>
  </div>
);

Form.Section.Left = ({ children }) => <div className="md:col-span-1">{children}</div>;

Form.Section.Right = ({ children }) => (
  <div className="mt-5 md:mt-0 md:col-span-2">
    <div className="grid grid-cols-6 gap-6">{children}</div>
  </div>
);

Form.Error = FieldErrorMessage;

export const FormExample = () => (
  <div className="space-y-4">
    <Card>
      <Card.Body>
        <Form>
          <Form.Item $first>
            <Form.Item.Label htmlFor="title">Titel</Form.Item.Label>
            <Form.Item.Body>
              <input className={Form.Item.text} name="title" type="text" />
            </Form.Item.Body>
          </Form.Item>
          <Form.Item>
            <Form.Item.Label htmlFor="url">URL</Form.Item.Label>
            <Form.Item.Body>
              <input className={Form.Item.text} name="url" type="text" />
            </Form.Item.Body>
          </Form.Item>
        </Form>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Form>
          <Form.Item $first $dense>
            <Form.Item.Label htmlFor="title">Titel</Form.Item.Label>
            <Form.Item.Body>
              <input className={Form.Item.text} name="title" type="text" />
            </Form.Item.Body>
          </Form.Item>
          <Form.Item $dense>
            <Form.Item.Label htmlFor="url">URL</Form.Item.Label>
            <Form.Item.Body>
              <input className={Form.Item.text} name="url" type="text" />
            </Form.Item.Body>
          </Form.Item>
        </Form>
      </Card.Body>
    </Card>
  </div>
);

export default Form;
