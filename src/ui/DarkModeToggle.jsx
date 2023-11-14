import { useDarkMode } from '../context/DarkModeContext';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const amber600 = '#d97706';
  const slate300 = '#cbd5e1';

  return (
    <DarkModeSwitch
      style={{ alignSelf: 'flex-start' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={24}
      moonColor={slate300}
      sunColor={amber600}
    />
  );
}

export default DarkModeToggle;
