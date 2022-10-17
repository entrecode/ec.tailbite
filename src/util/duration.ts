import dayjs from 'dayjs';
import _duration from 'dayjs/plugin/duration';

dayjs.extend(_duration);

export default function duration(value: any, amount?: number): any {
  if (amount) {
    value = value.replace(/\d/g, amount);
  }
  return dayjs.duration(value).humanize();
}
