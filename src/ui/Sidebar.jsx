import { NavLink } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useSidebarOpen } from '../context/SidebarControlContext';
import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';
import { usePageLanguage } from '../context/PageLanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

import { BsDownload } from 'react-icons/bs';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';

import { rootList, getLinkName } from '../data/rootList';
import { getSidebar } from '../data/pageDictionary';

function Sidebar() {
  const { closeSidebar } = useSidebarOpen();
  const { isLgScreen } = useScreenBreakpoints();
  const ref = useDetectClickOutside({
    onTriggered: closeSidebar,
    disableClick: true,
  });
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
  const { getPageLanguageName } = usePageLanguage();

  const userImageStyle = isDarkMode
    ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
    : { backgroundColor: 'rgba(255,255,255,0.5)' };

  return (
    <nav
      className={`border-color navbar-background flex h-full w-[16rem] flex-col items-center overflow-y-auto border-r px-5 pb-1 text-center`}
    >
      <div className=" my-[1rem] flex w-full items-center justify-between">
        <DarkModeToggle />
        <LanguageSelect />
      </div>

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
        ICT Teacher &amp; Computer Engineer
      </h2>

      <ul>
        {rootList.map((el) => (
          <StyledNavLink
            key={el.id}
            linkTo={el.pathName}
            linkText={getLinkName(el.id, getPageLanguageName())}
          />
        ))}
      </ul>

      <div className="mb-2 mt-auto flex flex-col items-center justify-center text-xs text-slate-600 dark:text-slate-400">
        <a
          href={`../cv-for-web-page-${getPageLanguageName()}.pdf`}
          rel="noopener noreferrer"
          target="_blank"
          className="border-color mb-2 flex w-fit items-center justify-center border-[1px] px-2 py-2"
        >
          <span className="mr-2">
            CV {getSidebar(getPageLanguageName()).download}
          </span>
          <BsDownload />
        </a>

        <div className="italic leading-3">
          <p>Ahmet Tuna Potur</p>
          <p>tunapotur@yahoo.com</p>
        </div>
      </div>
    </nav>
  );
}

function StyledNavLink({ linkTo, linkText }) {
  const { closeSidebar } = useSidebarOpen();
  const { isLgScreen } = useScreenBreakpoints();
  return (
    <li className="mb-4">
      <NavLink
        onClick={() => {
          if (!isLgScreen) closeSidebar();
        }}
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
      <PiDotsThreeVerticalBold
        className={`translate-animation h-8 w-8 fill-slate-800 dark:fill-slate-300 ${
          !isSidebarOpen && 'rotate-90'
        }`}
      />
    </button>
  );
}

function LanguageSelect() {
  const { setPageLanguage, languages, getPageLanguage } = usePageLanguage();
  const pageLanguage = getPageLanguage();

  return (
    <div className="w-[4rem]">
      <Listbox
        value={pageLanguage}
        onChange={(e) => {
          setPageLanguage(e.name);
        }}
      >
        <div className="relative z-10">
          <Listbox.Button className="relative w-full rounded-lg bg-stone-100 py-2 pl-3 text-left dark:bg-zinc-900 sm:text-sm">
            <span className="block truncate">{pageLanguage.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 w-full rounded-md bg-stone-100 py-1 dark:bg-zinc-900 sm:text-sm">
            {languages.map((language, languageIdx) => (
              <Listbox.Option
                key={languageIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-6 pr-1 ${
                    active
                      ? 'bg-amber-200/70 font-semibold dark:bg-amber-900'
                      : ''
                  }`
                }
                value={language}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {language.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-amber-700 dark:text-amber-400">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const amber600 = '#d97706';
  const slate300 = '#cbd5e1';

  return (
    <DarkModeSwitch
      style={{}}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={24}
      moonColor={slate300}
      sunColor={amber600}
    />
  );
}

export default Sidebar;
