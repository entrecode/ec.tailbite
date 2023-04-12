import { useState } from 'react';

const useFileDrag = ({ onDrop }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.types.includes('Files')) {
      setIsActive(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(false);
    if (e.dataTransfer.files.length > 0) {
      onDrop(e);
    }
  };

  return {
    isActive,
    dragProps: {
      onDragEnter: handleDragEnter,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    },
  };
};

export default useFileDrag;

export function UseFileDragExample() {
  const { isActive, dragProps } = useFileDrag({
    onDrop: (e) => {
      console.log('on Drop', e);
    },
  });
  return (
    <div className="bg-red-200 p-8" {...dragProps}>
      {isActive ? 'ACTIVE! drop now and look at the console' : 'not active..'}
    </div>
  );
}
