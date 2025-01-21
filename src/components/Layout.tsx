import { Outlet } from 'react-router-dom';
import AppSidebar from './Sidebar/SideBar';

export default function Layout() {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'min-content 1fr',
          height: '100%',
        }}
      >
        <AppSidebar />
        <div style={{ overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
