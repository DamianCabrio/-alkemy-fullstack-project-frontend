import { FaTimes } from 'react-icons/fa';

import Wrapper from '../styledWrappers/MobileSidebar';
import Logo from './Logo';

import { useAppContext } from '../contexts/app/appContext';

function MobileSidebar() {
  const { sidebarOpen, toggleSidebar } = useAppContext();

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
          <div className="nav-links">links</div>
        </div>
      </div>
    </Wrapper>
  );
}
export default MobileSidebar;
