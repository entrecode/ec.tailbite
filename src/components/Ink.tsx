import tw from 'tailwind-styled-components';

const Ink = {
  Light: tw.span<any>`text-gray-400 dark:text-gray-500`,
  Primary: tw.span<any>`text-indigo-600 dark:text-indigo-300 hover:text-indigo-900`,
  Secondary: tw.span<any>`dark:text-gray-300 leading-2 text-gray-700`,
  Error: tw.span<any>`dark:text-red-300 text-red-700`,
};

export default Ink;
