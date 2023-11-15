import { useDarkMode } from '../context/DarkModeContext';
import { useSidebarOpen } from '../context/SidebarControlContext';

import { BsDownload } from 'react-icons/bs';

import DarkModeToggle from './DarkModeToggle';
import { NavLink } from 'react-router-dom';
import rootList from '../data/rootList';

function Sidebar() {
  const { isDarkMode } = useDarkMode();
  const { isSidebarOpen } = useSidebarOpen();

  const userImage = isDarkMode
    ? '../navbar-user-image-small-dark.png'
    : '../navbar-user-image-small-light.png';

  return (
    <nav
      className={`border-color navbar-background translate-animation absolute z-50 flex h-full w-[16rem] flex-grow flex-col items-center overflow-y-auto border-r px-5 pb-1 pt-5 text-center ${
        !isSidebarOpen && '-translate-x-full'
      }`}
    >
      <DarkModeToggle />

      <img
        src={userImage}
        alt="user navbar photo"
        className="image-dark mt-2 h-36 rounded-full"
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
            'transition-colors hover:text-amber-700 hover:dark:text-amber-500',
          ].join(' ')
        }
      >
        <span>{linkText}</span>
      </NavLink>
    </li>
  );
}

export default Sidebar;
