import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Main from './MainLayout';

function AppLayout() {
  return (
    <div className="mx-auto flex h-screen w-[64rem] flex-row py-5">
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
