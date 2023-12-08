import { Outlet } from 'react-router-dom';
import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';

import Sidebar from './Sidebar';
import Main from './Main';
import SidebarMobilOpenOverlay from './SidebarMobilOpenOverlay';
import PageControl from './PageControl';

function AppLayout() {
  const { isLgScreen } = useScreenBreakpoints();

  return (
    <div className={`h-screen ${isLgScreen && 'py-4'}`}>
      <div
        className={`bg-heropattern relative flex h-full flex-row items-center justify-center overflow-hidden ${
          isLgScreen && 'border-color mx-auto w-[64rem] rounded border'
        }`}
      >
        <Sidebar />
        <SidebarMobilOpenOverlay />
        <Main>
          <PageControl>
            <Outlet />
          </PageControl>
        </Main>
      </div>
    </div>
  );
}

export default AppLayout;
