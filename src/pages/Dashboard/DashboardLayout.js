import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../styledWrappers/DashboardLayout';

function DashboardLayout() {
  return (
    <Wrapper>
      <nav>
        <Link to="/dashboard/operaciones">Operaciones</Link>
        <Link to="/dashboard/agregar">Agregar</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
}
export default DashboardLayout;
