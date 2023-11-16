import { Outlet } from 'react-router-dom';
import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';

import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  const { isLgScreen } = useScreenBreakpoints();

  return (
    <div className={`h-screen ${isLgScreen && 'py-4'}`}>
      <ContentWrapper>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </ContentWrapper>
    </div>
  );
}

function ContentWrapper({ children }) {
  const { isLgScreen } = useScreenBreakpoints();
  return (
    <div
      className={`bg-heropattern relative flex h-full flex-row items-center justify-center overflow-hidden ${
        isLgScreen && 'border-color mx-auto w-[64rem] rounded border'
      }`}
    >
      {children}
    </div>
  );
}

export default AppLayout;
