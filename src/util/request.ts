export interface FetchError extends Error {
  info: any;
  status: number;
}

export const request = (url, method = 'get', body?, headers = {}) => {
  // console.log(method, url);
  return fetch(url, {
    method,
    headers: { 'content-type': 'application/json', ...headers },
    ...(body ? { body: JSON.stringify(body) } : {}),
  }).then(async (res) => {
    if (!res.ok) {
      const error: Error & any = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    if (res.status === 204) {
      return res; // no content
    }
    return res.json();
  });
};

export const get = (url, headers?) => request(url, 'get', undefined, headers);
export const put = (url, body, headers?) => request(url, 'put', body, headers);
export const post = (url, body, headers?) => request(url, 'post', body, headers);
export const del = (url, body, headers?) => request(url, 'delete', body, headers);
