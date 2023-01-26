import dayjs from 'dayjs';
import 'dayjs/locale/de';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import minMax from 'dayjs/plugin/minMax';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('de');

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(minMax);
dayjs.extend(relativeTime);
dayjs.extend(duration);

export default dayjs;

// returns true if the input string is a valid date of given format.
// if no format is given, str is assumed to be an ISO date
// this works around the fact that dayjs thinks "15.20.2023" is valid in "DD.MM.YYYY"...
export const isStrictlyValid = (str?: string | null, format?: string) => {
  if (!str) {
    return false;
  }
  const day = format ? dayjs(str, format) : dayjs(str);
  if (format) {
    return day.format(format) === str;
  }
  return day.isValid() && day.toISOString() === str;
};
