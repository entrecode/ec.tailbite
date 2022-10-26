import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import dayjs from '../util/dayjs';
import Card from './Card';

const dateFormat = 'D. MMMM YYYY';

// TODO add Types
export default function TimePagination(props) {
  const {
    step = 'month',
    from: fromProp = dayjs().subtract(1, step).add(1, 'day').format('YYYY-MM-DD'),
    to: toProp = dayjs().format('YYYY-MM-DD'),
    min,
    max,
    format,
    onChange,
  } = props;
  const [from, setFrom] = useState(dayjs(fromProp, 'YYYY-MM-DD'));
  const [to, setTo] = useState(dayjs(toProp, 'YYYY-MM-DD'));
  const canGoLeft = !min || from.clone().subtract(1, step).add(1, 'day').isAfter(dayjs(min, 'YYYY-MM-DD'));
  const canGoRight = !max || to.clone().add(1, step).subtract(1, 'day').isBefore(dayjs(max, 'YYYY-MM-DD'));
  const updateRange = (_from, _to) => {
    setFrom(_from);
    setTo(_to);
    onChange?.([_from, _to].map((day) => day.startOf('day').format('YYYY-MM-DD')));
  };

  return (
    <div
      className={`flex items-center justify-between select-none space-x-2 shadow-sm px-2
focus:ring-primary focus:border-primary py-2
sm:text-sm  border border-gray-300 dark:border-gray-600 rounded-md  bg-white
dark:bg-gray-700`}
    >
      <div className={!canGoLeft ? 'cursor-not-allowed' : 'cursor-pointer'}>
        <ChevronLeftIcon
          className="w-5 h-5"
          onClick={() => canGoLeft && updateRange(from.subtract(1, step), to.subtract(1, step))}
        />
      </div>
      <span>{format?.(from, to) || `${from.format(dateFormat)} - ${to.format(dateFormat)}`}</span>
      <div className={!canGoRight ? 'cursor-not-allowed' : 'cursor-pointer'}>
        <ChevronRightIcon
          className="w-5 h-5"
          onClick={() => canGoRight && updateRange(from.add(1, step), to.add(1, step))}
        />
      </div>
    </div>
  );
}

export function TimePaginationExample() {
  const [[timestampFrom, timestampTo], setRange] = useState([
    dayjs().startOf('day').subtract(1, 'month').add(1, 'day').format('YYYY-MM-DD'),
    dayjs().endOf('day').format('YYYY-MM-DD'),
  ]);
  return (
    <Card>
      <Card.Body>
        <TimePagination
          from={timestampFrom}
          to={timestampTo}
          step="month"
          max={dayjs().format('YYYY-MM-DD')}
          onChange={setRange}
        />
        <pre>{[timestampFrom, timestampTo].join(', ')}</pre>
      </Card.Body>
    </Card>
  );
}
