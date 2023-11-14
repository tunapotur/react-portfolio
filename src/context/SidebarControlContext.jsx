import { createContext, useContext, useState } from 'react';

const SidebarControlContext = createContext();

function SidebarControlProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebarOpen() {
    setIsSidebarOpen((isOpen) => !isOpen);
  }

  return (
    <SidebarControlContext.Provider
      value={{ isSidebarOpen, toggleSidebarOpen }}
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
