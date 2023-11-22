import { NavLink } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useSidebarOpen } from '../context/SidebarControlContext';
import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';
import { useDarkMode } from '../context/DarkModeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { BsDownload } from 'react-icons/bs';
import { FaAngleLeft } from 'react-icons/fa6';

import rootList from '../data/rootList';

function Sidebar() {
  const { closeSidebar } = useSidebarOpen();
  const { isLgScreen } = useScreenBreakpoints();
  const ref = useDetectClickOutside({ onTriggered: closeSidebar });
  const { isSidebarOpen } = useSidebarOpen();

  const sidebarStyle = `translate-animation absolute top-0 left-0 z-50 h-full ${
    !isSidebarOpen && '-translate-x-full'
  }`;

  if (!isLgScreen)
    return (
      <div className={sidebarStyle} ref={ref}>
        <SidebarToggle />
        <SidebarContent />
      </div>
    );

  return (
    <div className={sidebarStyle}>
      <SidebarToggle />
      <SidebarContent />
    </div>
  );
}

function SidebarContent() {
  const { isDarkMode } = useDarkMode();

  const userImageStyle = isDarkMode
    ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
    : { backgroundColor: 'rgba(255,255,255,0.5)' };

  return (
    <nav
      className={`border-color navbar-background flex h-full w-[16rem] flex-col items-center overflow-y-auto border-r px-5 pb-1 text-center`}
    >
      <DarkModeToggle />
      <img
        src="../navbar-user-image-small.png"
        alt="user navbar photo"
        className="image-dark h-36 rounded-full"
        style={userImageStyle}
      />

      <h3 className="mb-2 mt-3 font-nunito text-3xl font-semibold leading-7">
        Ahmet Tuna Potur
      </h3>

      <h2 className="mb-10 font-open_sans font-medium">
        ICT Teacher &amp; Engineer
      </h2>

      <ul>
        {rootList.map((el) => (
          <StyledNavLink key={el.id} linkTo={el.pathName} linkText={el.text} />
        ))}
      </ul>

      {/* TODO  cv dosyası eklenecek */}
      <div className="mb-2 mt-auto text-xs text-slate-600 dark:text-slate-400">
        <div className="border-color mb-2 flex items-center justify-around border-[1px] px-3 py-2">
          <span className="pr-2">Download CV</span>
          <BsDownload />
        </div>

        <div className="italic leading-3">
          <p>Ahmet Tuna Potur</p>
          <p>tunapotur@yahoo.com</p>
        </div>
      </div>
    </nav>
  );
}

function StyledNavLink({ linkTo, linkText }) {
  return (
    <li className="mb-4">
      <NavLink
        to={`${linkTo}`}
        className={({ isActive, isPending }) =>
          [
            isPending ? 'loading...' : '',
            isActive ? 'text-amber-700 dark:text-amber-500' : '',
            'link',
          ].join(' ')
        }
      >
        <span>{linkText}</span>
      </NavLink>
    </li>
  );
}

function SidebarToggle() {
  const { isSidebarOpen, toggleSidebarOpen } = useSidebarOpen();

  return (
    <button
      className="border-color navbar-background absolute left-[16rem] right-12 top-10 z-40 flex h-10 w-[2.25rem] items-center justify-center rounded-r-lg border-y border-r"
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

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const amber600 = '#d97706';
  const slate300 = '#cbd5e1';

  return (
    <div className="ml-[-0.25rem] mt-[1rem] self-start">
      <DarkModeSwitch
        style={{}}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={24}
        moonColor={slate300}
        sunColor={amber600}
      />
    </div>
  );
}

export default Sidebar;
