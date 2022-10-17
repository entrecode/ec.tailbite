export const withParams = (route: string, params?: { [key: string]: string | boolean | number | null | undefined }) => {
  if (!params) {
    return route;
  }
  const paramString = Object.entries(params)
    .filter(([key, value]) => ![null, undefined].includes(value as any))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  if (!paramString) {
    return route;
  }
  return encodeURI(`${route}?${paramString}`);
};
