import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './context/DarkModeContext';
import { SidebarControlProvider } from './context/SidebarControlContext';

import AppLayout from './ui/AppLayout';
import Home from './page/Home';
import About from './page/About';
import Education from './page/Education';
import WorkExperience from './page/workExperience';
import MySampleProjects from './page/MySampleProjects';
import LanguageAndSkills from './page/LanguageAndSkills';
import Achievements from './page/Achievements';
import Certificates from './page/Certificates';
import UdemyCertificates from './page/UdemyCertificates';
import References from './page/References';
import PersonelInfoAndContact from './page/PersonelInfoAndContact';
import PageNotFound from './page/PageNotFound';
import { ScreenBreakpointsProvider } from './context/ScreenBreakpointsContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <ScreenBreakpointsProvider>
        <SidebarControlProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition={'top-right'}
            />
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="education" element={<Education />} />
                  <Route path="workexperience" element={<WorkExperience />} />
                  <Route
                    path="mysampleprojects"
                    element={<MySampleProjects />}
                  />
                  <Route
                    path="languageandskills"
                    element={<LanguageAndSkills />}
                  />
                  <Route path="achievements" element={<Achievements />} />
                  <Route path="certificates" element={<Certificates />} />
                  <Route
                    path="udemycertificates"
                    element={<UdemyCertificates />}
                  />
                  <Route path="references" element={<References />} />
                  <Route
                    path="personelinfoandcontact"
                    element={<PersonelInfoAndContact />}
                  />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </SidebarControlProvider>
      </ScreenBreakpointsProvider>
    </DarkModeProvider>
  );
}

export default App;
