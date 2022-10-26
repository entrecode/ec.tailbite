import React from 'react';

/** Just a regular old Chip Component */
export default function Chip({
  onX,
  children,
}: {
  /** if set, the chip has a clickable X which calls onX when clicked. */
  onX?: () => void;
  /** the content of the Chip */
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-600 bg-gray-200 border border-gray-600">
      <span className="text-xs font-normal items-center leading-none">{children}</span>
      {!!onX && (
        <span onClick={onX}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x cursor-pointer rounded-full w-4 h-4 ml-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      )}
    </span>
  );
}

export const ChipExample = () => {
  return (
    <div className="max-w-md">
      <Chip>without X</Chip>
      <Chip onX={() => console.log('close')}>with X</Chip>
    </div>
  );
};
