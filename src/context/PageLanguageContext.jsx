import { createContext, useContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const PageLanguageContext = createContext();

function PageLanguageProvider({ children }) {
  const languages = [
    { id: 1, name: 'En' },
    { id: 2, name: 'Tr' },
  ];

  const [pageLanguage, setPageLanguage] = useLocalStorageState(
    'En',
    'pageLanguage',
  );

  function getLanguage(language) {
    const index = languages.findIndex((el) => el.name === language);
    return languages[index];
  }

  function getPageLanguage() {
    return getLanguage(pageLanguage);
  }

  function getPageLanguageName() {
    return getLanguage(pageLanguage).name.toLowerCase();
  }

  return (
    <PageLanguageContext.Provider
      value={{
        setPageLanguage,
        languages,
        getPageLanguage,
        getPageLanguageName,
      }}
    >
      {children}
    </PageLanguageContext.Provider>
  );
}

function usePageLanguage() {
  const context = useContext(PageLanguageContext);
  if (context === undefined)
    throw new Error('PageLanguageContext was used outside of LanguageProvider');
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { PageLanguageProvider, usePageLanguage };
