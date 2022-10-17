import React from 'react';

const PageError = (error) => <div>Error {`${error?.message}` || 'unknown'}</div>;

export default PageError;

export function PageErrorExample() {
  return <PageError message="Error Message" />;
}
