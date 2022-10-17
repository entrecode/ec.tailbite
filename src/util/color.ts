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
