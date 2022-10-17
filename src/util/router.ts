const router = {
  navigate: (...args) => {
    console.log('TODO: router.navigate', args);
  },
};

export const isActive = (path: string[]) => {
  const { pathname } = window.location;
  return pathname === getLink(path);
};

export function getLink(path: string[], redirect?: string) {
  if (path.find((s) => typeof s === 'object')) {
    console.warn('object syntax not supported yet', path);
  }
  path = redirect ? path.concat([redirect]) : path;
  return `/${path.filter((segment) => typeof segment !== 'object').join('/')}`;
}

export const isActiveParent = (path: string[], matcher?) => {
  const { pathname } = window.location;
  return matcher ? matcher(pathname) : pathname.startsWith(getLink(path));
};

export default router;
