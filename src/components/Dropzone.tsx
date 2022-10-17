import { DropTargetMonitor, useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

/** Content agnostic component that can be used to drop stuff.  */
export default function Dropzone(
  { children, onDrop }: any /* {
  children: ({ isActive: boolean, drop: any }) => React.ReactNode;
  onDrop: (item: any) => void;
} */,
) {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item: { files: any[] }) {
        onDrop?.(item);
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [onDrop],
  );
  const isActive = canDrop && isOver;
  return children({ isActive, drop });
}

// TODO: storybook? => could not make it work with this:

/*
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dropzone from '../react/components/Dropzone';

export default {
  title: 'Components/Dropzone',
  component: Dropzone,
};

const Template = (args) => (
  <DndProvider backend={HTML5Backend}>
    <Dropzone {...args} onDrop={() => console.log('Drop')}>
      {({ isActive }) => <>drop something here and watch the actions tab. active:{isActive}</>}
    </Dropzone>
  </DndProvider>
);

export const Default = Template.bind({});
Default.args = {};

*/
