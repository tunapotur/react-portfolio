import { useSidebarOpen } from '../context/SidebarControlContext';
import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';

function Main({ children }) {
  const { isSidebarOpen } = useSidebarOpen();
  const { isLgScreen } = useScreenBreakpoints();

  return (
    <main
      className={`translate-animation flex h-full w-full justify-center overflow-y-auto ${
        isLgScreen && isSidebarOpen ? 'ml-[16rem]' : ''
      }`}
    >
      {children}
    </main>
  );
}

// overflow-x-hidden is deleted

export default Main;
