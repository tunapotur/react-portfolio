import { useSidebarOpen } from '../context/SidebarControlContext';

function Main({ children }) {
  const { isSidebarOpen } = useSidebarOpen();

  return (
    <main
      className={`translate-animation flex w-full flex-col items-center overflow-y-auto overflow-x-hidden ${
        isSidebarOpen ? 'ml-[16rem]' : ''
      }`}
    >
      {children}
    </main>
  );
}

export default Main;
