import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

function App() {
  return (
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
  );
}

export default App;
