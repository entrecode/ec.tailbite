//TODO: use tinycolor2
export function color(inputString: any, percentage: number = 0.4): string {
  let sum = 0;

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const i in inputString) {
    sum += inputString.charCodeAt(i);
  }

  // eslint-disable-next-line no-bitwise
  const r = ~~(
    (`0.${Math.sin(sum + 1)
      .toString()
      .substr(6)}` as any) *
    256 *
    percentage
  );

  // eslint-disable-next-line no-bitwise
  const g = ~~(
    (`0.${Math.sin(sum + 2)
      .toString()
      .substr(6)}` as any) *
    256 *
    percentage
  );

  // eslint-disable-next-line no-bitwise
  const b = ~~(
    (`0.${Math.sin(sum + 3)
      .toString()
      .substr(6)}` as any) *
    256 *
    percentage
  );

  let hex = '#';

  hex += `00${r.toString(16)}`.substr(-2, 2).toUpperCase();
  hex += `00${g.toString(16)}`.substr(-2, 2).toUpperCase();
  hex += `00${b.toString(16)}`.substr(-2, 2).toUpperCase();

  return hex;
}

export function rgbaContrastColor(R, G, B, A) {
  const brightness = R * 0.299 + G * 0.587 + B * 0.114 + (1 - A) * 255;
  return brightness > 186 ? '#000000' : '#FFFFFF';
}

export function hexContrastColor(hex) {
  let rgba = hexToRGBA(hex, 1);
  const channels = rgbaChannels(rgba);
  return rgbaContrastColor(...channels);
}
const isValidHex = (hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, 'g'));

const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16);

const getAlphafloat = (a, alpha) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};

const hexToRGBA = (hex, alpha) => {
  if (!isValidHex(hex)) {
    throw new Error('Invalid HEX');
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
};

const rgbaChannels = (rgba): [number, number, number, number] => {
  return rgba
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map((s) => parseFloat(s.trim()));
};
