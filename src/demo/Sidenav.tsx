import { useMatches, useNavigate } from 'react-router';
import { routes } from '../Examples';
import classNames from '../util/classNames';

function Sidenav() {
  const navigate = useNavigate();
  const matches = useMatches();
  return (
    <div className="w-64 shadow-lg h-full overflow-auto">
      {routes.map((item, i) => (
        <NavLink
          $active={matches.some((m) => m.pathname === `/${item.path}`)}
          key={i}
          onClick={() => navigate(`/${item.path}`)}
        >
          {item.path || 'README'}
        </NavLink>
      ))}
    </div>
  );
}

function NavLink({ children, $active, ...rest }: any) {
  return (
    <a
      {...rest}
      className={classNames(
        'p-3 border-b border-base-200 cursor-pointer flex space-x-1 items-center',
        $active ? 'bg-base-900 text-base-100' : 'bg-base-100',
      )}
    >
      {children}
    </a>
  );
}

export default Sidenav;
