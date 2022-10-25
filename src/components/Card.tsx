import React from 'react';
import tw from 'tailwind-styled-components';

const Card: any = tw.div`
shadow-md
relative text-sm
sm:rounded-md
bg-base-200
`;

export const CardBody = tw.div<{ $inner: boolean }>`
sm:rounded-t-md 
px-4 ${(p) => (!p.$inner ? 'py-4' : '')}`;

Card.Body = CardBody;

export const CardFooter = tw.div`
py-3
px-4 sm:px-6
sm:rounded-b-md
bg-gray-50 dark:bg-gray-800
`;
Card.Footer = CardFooter;

export const CardNested = tw.div`shadow-md sm:rounded-md bg-gray-100 dark:bg-gray-800`;
Card.Nested = CardNested;

export const CardExample = () => (
  <Card>
    <Card.Body>Cards are boxes to wrap any content</Card.Body>
    <Card.Footer>They can also have a footer</Card.Footer>
  </Card>
);

export default Card;
