import tw from 'tailwind-styled-components';

const Ink = {
  Light: tw.span<any>`text-gray-400 dark:text-gray-500`,
  Primary: tw.span<any>`text-primary dark:text-primary-dark`,
  Secondary: tw.span<any>`dark:text-gray-300 leading-2 text-gray-700`,
  Error: tw.span<any>`dark:text-red-300 text-red-700`,
};

export default Ink;
