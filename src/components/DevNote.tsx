import React from 'react';

const wagons = ['🚃', '🚋'];
const randomWagon = () => wagons[Math.floor(Math.random() * wagons.length)];
const train = (length) => '🚂' + Array.from({ length }, randomWagon).join('');

const DevNote = ({ children }: { children: React.ReactNode }) => {
  const Marquee = 'marquee';
  return (
    // @ts-ignore
    <Marquee>
      {train(4)}
      {children}
    </Marquee>
  );
};

export default DevNote;
