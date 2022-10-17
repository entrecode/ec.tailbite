/* import fileVariant from './fileVariant';

const mockAsset = {
  fileVariants: [
    {
      url: 'a',
      resolution: {
        width: 800,
        height: 600,
      },
    },
    {
      url: 'b',
      resolution: {
        width: 640,
        height: 480,
      },
    },
  ],
};

test('fileVariant', () => {
  expect(fileVariant(mockAsset, 600)).toBe('b');
  expect(fileVariant(mockAsset, 720)).toBe('a');
  expect(fileVariant(mockAsset, 719)).toBe('b');
  expect(fileVariant(mockAsset, 1000)).toBe('a');
  expect(fileVariant(mockAsset, 100)).toBe('b');
});
 */

export {};
