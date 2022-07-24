import { Outlet } from 'react-router-dom';
import Wrapper from '../../styledWrappers/DashboardLayout';

import { Navbar, Sidebar, MobileSidebar } from '../../components';

function DashboardLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <MobileSidebar />
        <Sidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
export default DashboardLayout;
