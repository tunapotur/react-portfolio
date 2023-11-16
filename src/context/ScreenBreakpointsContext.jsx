import { createContext, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

const ScreenBreakpointsContext = createContext();

// Tailwindcss breakpoints
const tailwindBreakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  xl2: '(min-width: 1536px)',
};

function ScreenBreakpointsProvider({ children }) {
  const isSmScreen = useMediaQuery({ query: tailwindBreakpoints.sm });
  const isMdScreen = useMediaQuery({ query: tailwindBreakpoints.md });
  const isLgScreen = useMediaQuery({ query: tailwindBreakpoints.lg });
  const isXgScreen = useMediaQuery({ query: tailwindBreakpoints.xl });
  const isXl2Screen = useMediaQuery({ query: tailwindBreakpoints.xl2 });

  return (
    <ScreenBreakpointsContext.Provider
      value={{ isSmScreen, isMdScreen, isLgScreen, isXgScreen, isXl2Screen }}
    >
      {children}
    </ScreenBreakpointsContext.Provider>
  );
}

function useScreenBreakpoints() {
  const context = useContext(ScreenBreakpointsContext);
  if (context === undefined)
    throw new Error(
      'ScreenBreakpointsContext was used outside of ScreenBreakpointsProvider',
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ScreenBreakpointsProvider, useScreenBreakpoints, tailwindBreakpoints };
