import { useSidebarOpen } from '../context/SidebarControlContext';

import { FaAngleLeft } from 'react-icons/fa6';

function SidebarToggle() {
  const { isSidebarOpen, toggleSidebarOpen } = useSidebarOpen();

  return (
    <button
      className={`border-color navbar-background translate-animation absolute right-12 top-10 flex h-10 w-9 items-center justify-center rounded-r-lg border-y border-r ${
        isSidebarOpen ? 'left-[16rem]' : 'left-0'
      }`}
      onClick={toggleSidebarOpen}
    >
      <FaAngleLeft
        className={`translate-animation h-8 w-8 fill-slate-800 dark:fill-slate-300 ${
          !isSidebarOpen && 'rotate-180'
        }`}
      />
    </button>
  );
}

export default SidebarToggle;
