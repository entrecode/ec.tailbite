import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// TODO: storybook?

export default function Draggable(props) {
  const dragRef = useRef<any>(null);
  const dropRef = useRef<any>(null);
  const { index, type = 'dnd', children, onDrop, disabled = false, onDragHover } = props;
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => !disabled,
    }),
    [index, disabled],
  );
  const [style, drop] = useDrop<{ index: number }, void, any>(
    () => ({
      accept: type,
      drop: (item) => onDrop(item.index, index),
      hover: (item, monitor) => {
        if (!onDragHover) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return;
        }
        // Determine rectangle on screen
        const hoverBoundingRect = dropRef.current?.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        const clientOffset: any = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        // Time to actually perform the action
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
        onDragHover?.(dragIndex, hoverIndex);
      },
      /*       collect: (monitor) => ({
        // opacity: monitor.isOver() ? 0.5 : 1,
        // background: monitor.isOver() ? 'blue' : 'white',
      }), */
      canDrop: () => !disabled,
    }),
    [index, disabled],
  );
  drag(dragRef);
  drop(dropRef);
  return (
    <div ref={drop} style={style} className="relative">
      <div ref={preview} className="relative">
        {isDragging && <div className="absolute h-full w-full border-2 border-dashed border-gray-200"></div>}
        <div style={isDragging ? { opacity: 0 } : {}}>{children(dragRef, dropRef)}</div>
      </div>
    </div>
  );
}

export function DraggableExample() {
  return (
    <>
      {[1, 2, 3].map((_, index) => (
        <div key={index}>
          <Draggable type="benefit" index={index} onDrop={(from, to) => console.log('drop', from, to)}>
            {(dragRef, dropRef) => (
              <div ref={dropRef}>
                <p>any content #{index}</p>
                <div ref={dragRef} className="cursor-move">
                  drag
                </div>
              </div>
            )}
          </Draggable>
        </div>
      ))}
    </>
  );
}
