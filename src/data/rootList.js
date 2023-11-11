const rootList = [
  { id: 0, path: '/home', text: 'Home' },
  { id: 1, path: '/about', text: 'About' },
  { id: 2, path: '/education', text: 'Education' },
  { id: 3, path: '/workexperience', text: 'Work Experience' },
  { id: 4, path: '/mysampleprojects', text: 'My Sample Projects' },
  { id: 5, path: '/languageandskills', text: 'Foreign Languages & Skills' },
  { id: 6, path: '/achievements', text: 'Achievements' },
  { id: 7, path: '/certificates', text: 'Certificates' },
  { id: 8, path: '/udemycertificates', text: 'Udemy Certificates' },
  { id: 9, path: '/references', text: 'References' },
  {
    id: 10,
    path: '/personelinfoandcontact',
    text: 'Personal Information & Contact',
  },
];

export default rootList.sort((a, b) => a.id - b.id);
