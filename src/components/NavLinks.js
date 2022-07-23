import { useLocation, NavLink } from 'react-router-dom';

import links from '../helpers/navLinks';

function NavLinks({toggleSidebar}) {
  const location = useLocation();

  return (
    <div>
      <div className="nav-links">
        {links.map(({ id, name, path, icon }) => (
          <NavLink
            key={id}
            to={path}
            className={() => {
              const currentPath = location.pathname.split('/')[2]
                ? location.pathname.split('/')[2]
                : location.pathname;
              return currentPath === path ? 'nav-link active' : 'nav-link';
            }}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default NavLinks;
