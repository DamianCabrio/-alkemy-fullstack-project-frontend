import { FaTimes } from 'react-icons/fa';

import Wrapper from '../styledWrappers/MobileSidebar';
import Logo from './Logo';


import { useAppContext } from '../contexts/app/appContext';
import NavLinks from './NavLinks';

function MobileSidebar() {
  const { sidebarOpen, toggleSidebar, clearAlert } = useAppContext();

  const handleClick = () => {
    toggleSidebar();
    clearAlert();
  }

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
          <NavLinks toggleSidebar={handleClick} />
        </div>
      </div>
    </Wrapper>
  );
}
export default MobileSidebar;
