import { useSidebarOpen } from '../context/SidebarControlContext';
import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';

function Main({ children }) {
  const { isSidebarOpen } = useSidebarOpen();
  const { isLgScreen } = useScreenBreakpoints();

  return (
    <main
      className={`translate-animation flex w-full flex-col items-center overflow-y-auto overflow-x-hidden bg-lime-500/50 ${
        isSidebarOpen ? 'ml-[16rem]' : ''
      } ${!isLgScreen && 'absolute z-20 ml-0 h-full'}`}
    >
      {children}
    </main>
  );
}

export default Main;
