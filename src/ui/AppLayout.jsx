import { Outlet } from 'react-router-dom';
import SidebarToggle from './SidebarToggle';

import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  return (
    <div className="h-screen py-4">
      <div className="bg-heropattern border-color relative mx-auto flex h-full w-[64rem] flex-row overflow-hidden rounded border">
        <SidebarToggle />
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default AppLayout;
