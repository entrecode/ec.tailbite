import React from 'react';
import useSdk from '../hooks/useSdk';
import LocalLoader from './LocalLoader';

const embedUrl = 'https://admin-dev.appsite.de';
// const embedUrl = 'https://localhost:4200';

export default function EmbedOldAdmin({ route }) {
  const { token, api } = useSdk();
  const theme = localStorage.getItem('theme');
  const [loading, setLoading] = React.useState(true);
  const url =
    embedUrl && token && api?.shortID && route
      ? `${embedUrl}/embed?theme=${theme}&redirect=/${route}&token=${token}`
      : '';
  return (
    <>
      {loading && <LocalLoader />}
      <div className={loading ? 'hidden' : ''}>
        {url && (
          <iframe
            ref={(el) => {
              if (el) {
                // setLoading(true);
                el.onload = function () {
                  setLoading(false);
                };
              }
            }}
            src={decodeURIComponent(url)}
            className="w-screen h-screen"
          />
        )}
      </div>
    </>
  );
}
