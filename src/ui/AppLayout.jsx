import { Outlet } from 'react-router-dom';
import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';

import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  const { isLgScreen } = useScreenBreakpoints();

  return (
    <div className={`h-screen ${isLgScreen && 'py-4'}`}>
      <div
        className={`bg-heropattern relative flex h-full flex-row overflow-hidden  ${
          isLgScreen && 'border-color mx-auto w-[64rem] rounded border'
        }`}
      >
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default AppLayout;
