import { useAppContext } from '../contexts/app/appContext';
import NavLinks from './NavLinks';
import Logo from './Logo';
import Wrapper from '../styledWrappers/Sidebar';

function Sidebar() {
  const { sidebarOpen, clearAlert } = useAppContext();
  
  return (
    <Wrapper>
      <div
        className={
          sidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={clearAlert} />
        </div>
      </div>
    </Wrapper>
  );
}
export default Sidebar;
