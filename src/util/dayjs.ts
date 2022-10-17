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
