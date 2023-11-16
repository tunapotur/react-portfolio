import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';
import { useSidebarOpen } from '../context/SidebarControlContext';

function SidebarMobilOpenOverlay() {
  const { isLgScreen } = useScreenBreakpoints();
  const { isSidebarOpen } = useSidebarOpen();

  return (
    <div
      className={`translate-animation absolute ${
        !isLgScreen &&
        isSidebarOpen &&
        'inset-0 flex items-center justify-center bg-slate-300/20 backdrop-blur-sm dark:bg-slate-600/20'
      }`}
    ></div>
  );
}

export default SidebarMobilOpenOverlay;
