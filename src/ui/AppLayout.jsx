import { Outlet } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { useSidebarOpen } from '../context/SidebarControlContext';

import SidebarToggle from './SidebarToggle';
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  const { closeSidebar } = useSidebarOpen();
  const ref = useDetectClickOutside({ onTriggered: closeSidebar });
  return (
    <div className="h-screen py-4">
      <div className="bg-heropattern border-color relative mx-auto flex h-full w-[64rem] flex-row overflow-hidden rounded border">
        <div ref={ref}>
          <SidebarToggle />
          <Sidebar />
        </div>
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default AppLayout;
