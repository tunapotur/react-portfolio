const rootList = [
  { id: 0, pathName: 'home', text: 'Home', sourceName: 'person' },
  { id: 1, pathName: 'about', text: 'About', sourceName: 'person' },
  { id: 2, pathName: 'education', text: 'Education', sourceName: 'education' },
  {
    id: 3,
    pathName: 'workexperience',
    text: 'Work Experience',
    sourceName: 'workExperience',
  },
  {
    id: 4,
    pathName: 'mysampleprojects',
    text: 'My Sample Projects',
    sourceName: 'mySampleProjects',
  },
  {
    id: 5,
    pathName: 'languageandskills',
    text: 'Foreign Languages & Skills',
    sourceName: 'languageAndSkills',
  },
  {
    id: 6,
    pathName: 'achievements',
    text: 'Achievements',
    sourceName: 'achievements',
  },
  {
    id: 7,
    pathName: 'certificates',
    text: 'Certificates',
    sourceName: 'certificates',
  },
  {
    id: 8,
    pathName: 'udemycertificates',
    text: 'Udemy Certificates',
    sourceName: 'udemyCertificates',
  },
  {
    id: 9,
    pathName: 'references',
    text: 'References',
    sourceName: 'references',
  },
  {
    id: 10,
    pathName: 'personelinfoandcontact',
    text: 'Personal Information & Contact',
    sourceName: 'person',
  },
];

export default rootList.sort((a, b) => a.id - b.id);
