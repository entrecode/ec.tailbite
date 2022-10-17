export default function snip(str: string, max: number = 65) {
  if (str?.length <= max) {
    return str;
  }
  return `${str?.slice(0, max)}...`;
}
