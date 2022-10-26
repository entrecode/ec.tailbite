import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/de';
import React, { useEffect, useState } from 'react';
// require('dayjs/locale/de');

dayjs.locale('de');

export default function Calendar({ value, onChange }: { value: string | null; onChange: (value: Dayjs) => void }) {
  const [month, setMonth] = useState(dayjs().startOf('month'));
  const [day, setDay] = useState(dayjs().startOf('day'));
  useEffect(() => {
    const date = dayjs(value);
    if (date.isValid()) {
      setDay(date.clone().startOf('day'));
      setMonth(date.clone().startOf('month'));
    }
  }, [value]);
  const changeDay = (d) => {
    setDay(d);
    onChange?.(d);
  };
  const weeks = Array(5)
    .fill(0)
    .map((_, i) => month.startOf('week').startOf('day').clone().add(i, 'week'));
  // markup from https://tailwinduikit.com/components/webapp/calendar/calendar (Calendar 1)
  return (
    <div className="flex items-center justify-center select-none">
      <div className="w-full rounded-xl shadow-lg md:p-6 p-3 bg-white dark:bg-gray-800">
        <div className="px-2 flex items-center justify-between leading-8">
          <h1 className="text-xl font-medium text-gray-800 dark:text-gray-100">{month.format('MMMM YYYY')}</h1>
          <div className="flex items-center text-gray-800 dark:text-gray-100">
            <a className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => {
                  setMonth(month.subtract(1, 'month').startOf('month'));
                }}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </a>
            <a className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler ml-3 icon-tabler-chevron-right"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => {
                  setMonth(month.add(1, 'month').startOf('month'));
                }}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 overflow-x-auto ">
          <table className="w-full">
            <thead>
              <tr>
                {Array(7)
                  .fill(0)
                  .map((_, i) => dayjs().startOf('week').add(i, 'days').format('dd'))
                  .map((d) => (
                    <th key={d}>
                      <div className="w-full flex justify-center">
                        <p className="text-md mb-0 font-medium text-center text-gray-800 dark:text-gray-100">{d}</p>
                      </div>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((weekStart, w) => (
                <tr key={w}>
                  {Array(7)
                    .fill(0)
                    .map((_, i) => {
                      const d = weekStart.clone().add(i, 'days').startOf('day');
                      if (day.isSame(d, 'day')) {
                        return (
                          <td key={i} className={w === 0 ? 'pt-3' : ''}>
                            <div className="w-full h-full">
                              <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                <p className="text-md mb-0 w-8 h-8 flex items-center justify-center font-medium text-white bg-primary text-primary-contrast rounded-full">
                                  {d.format('D')}
                                </p>
                              </div>
                            </div>
                          </td>
                        );
                      }
                      return (
                        <td key={i} className={w === 0 ? 'pt-3' : ''} onClick={() => changeDay(d)}>
                          <div className="px-2 py-4 cursor-pointer flex w-full justify-center">
                            {d.isSame(month, 'month') && (
                              <p className="text-md mb-0 text-gray-500 dark:text-gray-100">{d.format('D')}</p>
                            )}
                          </div>
                        </td>
                      );
                    })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
