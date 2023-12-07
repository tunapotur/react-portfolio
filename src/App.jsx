import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './context/DarkModeContext';
import { SidebarControlProvider } from './context/SidebarControlContext';
import { PageLanguageProvider } from './context/PageLanguageContext';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import WorkExperience from './pages/WorkExperience';
import MySampleProjects from './pages/MySampleProjects';
import LanguageAndSkills from './pages/LanguageAndSkills';
import Achievements from './pages/Achievements';
import Certificates from './pages/Certificates';
import UdemyCertificates from './pages/UdemyCertificates';
import References from './pages/References';
import PersonelInfoAndContact from './pages/PersonelInfoAndContact';
import PageNotFound from './pages/PageNotFound';
import { ScreenBreakpointsProvider } from './context/ScreenBreakpointsContext';
// import EmptyPage from './pages/EmptyPage';

// TODO Eng Tr geçişi yapılacak.
// TODO Gesture kodu sadeleştirilecek geresiz kısımlar silinecek.
// TODO Gesture Mümkünse biraz daha yavaş bir geçiş yapılacak. Hakeretle hemen geçiyor
// TODO türkçe indirilecek cv hazırlanacak.
// TODO indirilen cv'lere örnek proje linkleri konacak qr olabilir
// TODO readme dosyasına projenin nasıl çalıştırılacağı ve nasıl özelliştirileceği anlatılarca

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
      <PageLanguageProvider>
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
                    {/* <Route path="emptypage" element={<EmptyPage />} /> */}
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
      </PageLanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
