import React from 'react';
import Card from './Card';

/*https://tailwindui.com/components/application-ui/data-display/description-lists*/
function DataList({ children, cols = 2 }: any) {
  // keep those comments for tailwind to parse
  // sm:grid-cols-2
  // sm:grid-cols-3
  // sm:grid-cols-4
  return <dl className={`grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-${cols}`}>{children}</dl>;
}

export const DataListItem = ({ children }: { children: any }) => <div className="sm:col-span-1">{children}</div>;
DataList.Item = DataListItem;

export const DataListHeader = ({ children }: { children: any }) => (
  <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{children}</dt>
);
DataList.Header = DataListHeader;

export const DataListBody = ({ children }: { children: any }) => (
  <dd className="mt-1 text-sm text-gray-900 dark:text-gray-400">{children}</dd>
);
DataList.Body = DataListBody;

export default DataList;

export function DataListExample() {
  return (
    <Card className="max-w-md">
      <Card.Body>
        <DataList>
          <DataList.Item>
            <DataList.Header>Component Name</DataList.Header>
            <DataList.Body>DataList</DataList.Body>
          </DataList.Item>
          <DataList.Item>
            <DataList.Header>Info</DataList.Header>
            <DataList.Body>A DataList can be used to structure content</DataList.Body>
          </DataList.Item>
          <DataList.Item>
            <DataList.Header>Header</DataList.Header>
            <DataList.Body>Body</DataList.Body>
          </DataList.Item>
          <DataList.Item>
            <DataList.Header>Header</DataList.Header>
            <DataList.Body>Body</DataList.Body>
          </DataList.Item>
        </DataList>
      </Card.Body>
    </Card>
  );
}
