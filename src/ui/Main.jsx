import { useSidebarOpen } from '../context/SidebarControlContext';

function Main({ children }) {
  const { isSidebarOpen } = useSidebarOpen();

  return (
    <main
      className={`translate-animation flex flex-col items-center overflow-y-auto px-[3rem] pb-10 pt-24 ${
        isSidebarOpen ? 'ml-[16rem] w-[48rem]' : 'mx-[8rem] w-[48rem]'
      }`}
    >
      {children}
    </main>
  );
}

export default Main;
