import Wrapper from '../styledWrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from '../contexts/app/appContext';
import Logo from './Logo';

function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => console.log('toggle sidebar')}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => console.log('toggle dropdown')}
          >
            <FaUserCircle />
            Nombre
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => console.log('cerrar sesión')}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default Navbar;
