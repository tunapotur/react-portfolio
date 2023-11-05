import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLayout from './ui/AppLayout';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import WorkExperience from './pages/workExperience';
import MySampleProjects from './pages/mySampleProjects';
import LanguageAndSkills from './pages/languageAndSkills';
import Achievements from './pages/achievements';
import Certificates from './pages/certificates';
import UdemyCertificates from './pages/udemyCertificates';
import References from './pages/references';
import PersonelInfoAndContact from './pages/personelInfoAndContact';
import PageNotFound from './pages/pageNotFound';

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
            <Route index element={<Home />} />
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
