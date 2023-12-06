import { createContext, useContext, useState } from 'react';
import { useScreenBreakpoints } from './ScreenBreakpointsContext';

const SidebarControlContext = createContext();

// TODO ayni DarkMode gibi Mobil dışında LocalStorage sidebar ayarları yazılsın her açılışta kullanıcı ayarına göre sidebar açılsın.
function SidebarControlProvider({ children }) {
  const { isLgScreen } = useScreenBreakpoints();
  const [isSidebarOpen, setIsSidebarOpen] = useState(isLgScreen);

  function toggleSidebarOpen() {
    setIsSidebarOpen((isOpen) => !isOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <SidebarControlContext.Provider
      value={{ isSidebarOpen, toggleSidebarOpen, closeSidebar }}
    >
      {children}
    </SidebarControlContext.Provider>
  );
}

function useSidebarOpen() {
  const context = useContext(SidebarControlContext);
  if (context === undefined)
    throw new Error(
      'SidebarControlContext was used outside of SidebarControlProvider',
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SidebarControlProvider, useSidebarOpen };
