/*
  This example requires Tailwind CSS v3.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useLocalStorage from '../hooks/useLocalStorage';
import { classNames } from '../util/classNames';

export default function TopMenuSearch({ appsites, api, open, setOpen }) {
  const [rawQuery, setRawQuery] = useState('');
  const navigate = useNavigate();

  const query = rawQuery.toLowerCase().replace(/^[#>]/, '');
  const filteredSites = query
    ? appsites.filter(
        (site) => site.title.toLowerCase().includes(query) || (site.alias || '').toLowerCase().includes(query),
      )
    : appsites;
  const [recentlyUsedSites, setRecentlyUsedSites] = useLocalStorage('recentlyUsedSites', []);

  useEffect(() => {
    if (!recentlyUsedSites?.includes(api.shortID)) {
      setRecentlyUsedSites([api.shortID, ...recentlyUsedSites].slice(0, 3));
    }
  }, [api.shortID, recentlyUsedSites, setRecentlyUsedSites]);

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setRawQuery('')} appear>
      <Dialog as="div" className="relative z-30" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              {/* @ts-ignore */}
              <Combobox onChange={(item: any) => navigate(`/${item?.shortID}`)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                </div>

                <Combobox.Options
                  static
                  className="max-h-80 scroll-py-10 scroll-py-10 scroll-pb-2 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
                >
                  {recentlyUsedSites?.length > 0 && (query.length === 0 || filteredSites.length === 0) && (
                    <li>
                      <h2 className="text-xs font-semibold text-gray-900">Zuletzt verwendet</h2>
                      <ul className="-mx-4 mt-2 text-sm text-gray-700">
                        {recentlyUsedSites
                          .map((rs) => appsites.find((as) => as.shortID === rs))
                          .map((project) => (
                            <Combobox.Option
                              key={'aa' + project?.shortID}
                              value={project}
                              className={({ active }) =>
                                classNames(
                                  'flex cursor-default select-none items-center px-4 py-2',
                                  active && 'bg-indigo-600 text-white',
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <GlobeAltIcon
                                    className={classNames('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400')}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {project.title}
                                    {project.isEVA && (
                                      <span className="ml-2 py-0.5 px-1.5 text-black bg-yellow-100 dark:bg-yellow-200 text-xs dark:text-gray-800 rounded text-center">
                                        EVA
                                      </span>
                                    )}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                      </ul>
                    </li>
                  )}
                  {filteredSites?.length > 0 && (
                    <li>
                      <h2 className="text-xs font-semibold text-gray-900">Appsites</h2>
                      <ul className="-mx-4 mt-2 text-sm text-gray-700">
                        {filteredSites.map((project) => (
                          <Combobox.Option
                            key={project.shortID}
                            value={project}
                            className={({ active }) =>
                              classNames(
                                'flex cursor-default select-none items-center px-4 py-2',
                                active && 'bg-indigo-600 text-white',
                              )
                            }
                          >
                            {({ active }) => (
                              <>
                                <GlobeAltIcon
                                  className={classNames('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400')}
                                  aria-hidden="true"
                                />
                                <span className="ml-3 flex-auto truncate">
                                  {project.title}
                                  {project.isEVA && (
                                    <span className="ml-2 py-0.5 px-1.5 text-black bg-yellow-100 dark:bg-yellow-200 text-xs dark:text-gray-800 rounded text-center">
                                      EVA
                                    </span>
                                  )}
                                </span>
                              </>
                            )}
                          </Combobox.Option>
                        ))}
                      </ul>
                    </li>
                  )}
                </Combobox.Options>

                {/* {query !== '' && (
                  <div className="py-14 px-6 text-center text-sm sm:px-14">
                    <ExclamationTriangleIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-gray-900">No results found</p>
                    <p className="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
                  </div>
                )} */}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
