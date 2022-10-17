import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';
import minMax from 'dayjs/plugin/minMax';

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(minMax);

import 'dayjs/locale/de';

dayjs.locale('de');

export default dayjs;
