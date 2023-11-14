import { useSidebarOpen } from '../context/SidebarControlContext';

import { FaAngleLeft } from 'react-icons/fa6';

function SidebarToggle() {
  const { isSidebarOpen, toggleSidebarOpen } = useSidebarOpen();

  return (
    <button
      className="border-color navbar-background absolute left-[25%] top-10 flex h-10 w-9 items-center justify-center rounded-r-lg border-y border-r"
      onClick={toggleSidebarOpen}
    >
      <FaAngleLeft
        className={`h-8 w-8 fill-slate-800 transition-transform duration-300 ${
          !isSidebarOpen && 'rotate-180'
        }`}
      />
    </button>
  );
}

export default SidebarToggle;
