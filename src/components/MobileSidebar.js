import { useLocation } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import Wrapper from '../styledWrappers/MobileSidebar';
import Logo from './Logo';
import links from '../helpers/navLinks';

import { useAppContext } from '../contexts/app/appContext';

function MobileSidebar() {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const location = useLocation();

  return (
    <Wrapper>
      <div
        className={
          sidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
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
      </div>
    </Wrapper>
  );
}
export default MobileSidebar;
