/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import Button from './Button';

export function Pagination(props: {
  value: number;
  onChange: (value: number) => void;
  total: number;
  perPage?: number;
  className?: string;
  count: number;
  hideTextInfo: boolean;
}) {
  const { value: page, total = 0, count: perPage = 25, onChange, hideTextInfo } = props;
  const pageCount = Math.ceil(total / perPage);
  const [selectedPage, setSelectedPage] = useState(page || 1);
  useEffect(() => {
    if (page && page !== selectedPage) {
      setSelectedPage(page || 1);
    }
  }, [page]);
  const lookahead = 2;
  const p = (from, to) =>
    Array.from({ length: Math.max(to - from, 0) }, (_, i) => i + 1 + from).filter((p) => p > 0 && p <= pageCount);
  const pages = [
    ...p(selectedPage - lookahead - 1, selectedPage - 1),
    selectedPage,
    ...p(selectedPage, selectedPage + lookahead),
  ];
  const changePage = (page) => {
    setSelectedPage(page);
    onChange?.(page);
  };
  const isSelected = (page) => page === selectedPage;

  const PageLink = ({ page }) => (
    <a
      onClick={() => changePage(page)}
      className={`${
        isSelected(page)
          ? 'z-10 bg-primary border-primary text-primary-contrast'
          : 'bg-white dark:bg-gray-700 border-gray-300 text-gray-500 dark:text-gray-300 hover:bg-gray-50'
      } relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer select-none`}
    >
      {page}
    </a>
  );
  if (pageCount < 2) {
    return null;
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <Button $empty onClick={() => changePage(Math.max(selectedPage - 1, 1))}>
          Zurück
        </Button>
        <Button $empty onClick={() => changePage(Math.min(selectedPage + 1, pageCount))}>
          Weiter
        </Button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        {!hideTextInfo && (
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-0">
              <span className="font-medium">Zeige {(page - 1) * perPage + 1}</span> bis{' '}
              <span className="font-medium">{Math.min(page * perPage, total)}</span> von{' '}
              <span className="font-medium">{total}</span>
            </p>
          </div>
        )}
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              onClick={() => changePage(Math.max(selectedPage - 1, 1))}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-200  hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {pages[0] > 1 && <PageLink page={1} />}
            {pages[0] > 2 && <Dots />}
            {pages.map((page, i) => (
              <PageLink key={i} page={page} />
            ))}
            {pages[pages.length - 1] < pageCount - 1 && <Dots />}

            {pages[pages.length - 1] < pageCount && <PageLink page={pageCount} />}
            <a
              onClick={() => changePage(Math.min(selectedPage + 1, pageCount))}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 select-none">
      ...
    </span>
  );
}
