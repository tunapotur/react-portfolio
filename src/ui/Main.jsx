import { useSidebarOpen } from '../context/SidebarControlContext';

function Main({ children }) {
  const { isSidebarOpen } = useSidebarOpen();

  return (
    <main
      className={`translate-animation flex w-[48rem] flex-col items-center overflow-y-auto px-[3rem] pb-10 pt-24 ${
        isSidebarOpen ? 'ml-[16rem]' : 'mx-[8rem]'
      }`}
    >
      {children}
    </main>
  );
}

export default Main;
