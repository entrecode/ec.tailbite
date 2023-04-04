import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  useSortable,
  rectSortingStrategy,
  rectSwappingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export interface DndItem {
  id: string;
  [prop: string]: any;
}

declare type UseSortableReturn = ReturnType<typeof useSortable>;
declare type ItemRenderer = (item: DndItem, sortable: UseSortableReturn) => ReactNode;

export function SortableItem(props: { item: DndItem; children: ItemRenderer }) {
  const sortable = useSortable({
    id: props.item.id,
  });
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = sortable;
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...(isDragging ? { zIndex: 1000, position: 'relative' as any } : {}),
    cursor: 'auto',
  };
  const handleProps = { ...listeners, ...attributes };
  return (
    <div ref={setNodeRef} style={style}>
      {props.children(props.item, sortable)}
    </div>
  );
}

const strategies = {
  x: horizontalListSortingStrategy,
  y: verticalListSortingStrategy,
  sort: rectSortingStrategy,
  swap: rectSwappingStrategy,
};

export function Sortable({
  value: items,
  onChange: setItems,
  children,
  strategy = 'y',
}: {
  value: DndItem[];
  onChange: Dispatch<SetStateAction<DndItem[]>>;
  children: ItemRenderer;
  strategy?: keyof typeof strategies;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((item) => item.id)} strategy={strategies[strategy]}>
        {items.map((item) => (
          <SortableItem key={item.id} item={item}>
            {children}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

const fruit = ['Apple', 'Banana', 'Lemon'].map((value, id) => ({ value, id: id + '' }));
const images = ['https://unsplash.it/200/200', 'https://unsplash.it/201/201', 'https://unsplash.it/202/202'].map(
  (url, i) => ({ url, id: i + '' }),
);
const moreImages = [
  'https://unsplash.it/200/200',
  'https://unsplash.it/201/201',
  'https://unsplash.it/202/202',
  'https://unsplash.it/203/203',
  'https://unsplash.it/204/204',
  'https://unsplash.it/205/205',
].map((url, i) => ({ url, id: i + '' }));

export function SortableExample() {
  const [a, setA] = useState<DndItem[]>(fruit);
  const [b, setB] = useState<DndItem[]>(images);
  const [c, setC] = useState<DndItem[]>(images);
  const [d, setD] = useState<DndItem[]>(images);
  const [e, setE] = useState<DndItem[]>(moreImages);
  return (
    <>
      <p>
        Uses <a href="https://docs.dndkit.com/presets/sortable">@dndkit/sortable</a>
      </p>
      <h3 className="text-xl my-8">Simple List</h3>
      <Sortable value={a} onChange={setA}>
        {(item, { listeners, attributes }) => (
          <span {...listeners} {...attributes}>
            {item.value}
          </span>
        )}
      </Sortable>
      <h3 className="text-xl my-8">Horizontal Images</h3>
      <div className="flex space-x-2">
        <Sortable value={d} onChange={setD} strategy="x">
          {(item, { listeners, attributes }) => (
            <div>
              <div className="border p-2 bg-slate-50 inline-block cursor-move" {...listeners} {...attributes}>
                <img src={item.url} width="200" height="200" />
              </div>
            </div>
          )}
        </Sortable>
      </div>
      <h3 className="text-xl my-8">Horizontal Images with Handle</h3>
      <div className="flex space-x-2">
        <Sortable value={c} onChange={setC} strategy="x">
          {(item, { listeners, attributes }) => (
            <div>
              <div className="border p-2 bg-slate-50 inline-block">
                <img src={item.url} width="200" height="200" className="pointer-events-none" />
                <div className="cursor-move select-none" {...listeners} {...attributes}>
                  drag me
                </div>
              </div>
            </div>
          )}
        </Sortable>
      </div>
      <h3 className="text-xl my-8">Vertical Images with Handle</h3>
      <div className="flex flex-col space-y-2">
        <Sortable value={b} onChange={setB}>
          {(item, { listeners, attributes }) => (
            <div>
              <div className="border p-2 bg-slate-50 inline-block">
                <img src={item.url} width="200" height="200" className="pointer-events-none" />
                <div className="cursor-move select-none" {...listeners} {...attributes}>
                  drag me
                </div>
              </div>
            </div>
          )}
        </Sortable>
      </div>
      <h3 className="text-xl my-8">Grid Images</h3>
      <div className="flex flex-wrap gap-2">
        <Sortable value={e} onChange={setE} strategy="sort">
          {(item, { listeners, attributes }) => (
            <div className="border p-2 bg-slate-50" {...listeners} {...attributes}>
              <img src={item.url} width="200" height="200" className="pointer-events-none" />
            </div>
          )}
        </Sortable>
      </div>
    </>
  );
}
