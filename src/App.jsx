import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import WorkExperience from './pages/workExperience';
import MySampleProjects from './pages/MySampleProjects';
import LanguageAndSkills from './pages/LanguageAndSkills';
import Achievements from './pages/Achievements';
import Certificates from './pages/Certificates';
import UdemyCertificates from './pages/UdemyCertificates';
import References from './pages/References';
import PersonelInfoAndContact from './pages/PersonelInfoAndContact';
import PageNotFound from './pages/PageNotFound';

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
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="education" element={<Education />} />
            <Route path="workexperience" element={<WorkExperience />} />
            <Route path="mysampleprojects" element={<MySampleProjects />} />
            <Route path="languageandskills" element={<LanguageAndSkills />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="udemycertificates" element={<UdemyCertificates />} />
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
  );
}

export default App;
