const rootList = [
  {
    id: 0,
    pathName: 'home',
    text: [
      { linkName: 'Home', language: 'en' },
      { linkName: 'Ana Sayfa', language: 'tr' },
    ],
    sourceName: 'person',
  },
  {
    id: 1,
    pathName: 'about',
    text: [
      { linkName: 'About', language: 'en' },
      { linkName: 'Hakkımda', language: 'tr' },
    ],
    sourceName: 'person',
  },
  {
    id: 2,
    pathName: 'education',
    text: [
      { linkName: 'Education', language: 'en' },
      { linkName: 'Eğitim', language: 'tr' },
    ],
    sourceName: 'education',
  },
  {
    id: 3,
    pathName: 'workexperience',
    text: [
      { linkName: 'Work Experience', language: 'en' },
      { linkName: 'İş Deneyimi', language: 'tr' },
    ],
    sourceName: 'workExperience',
  },
  {
    id: 4,
    pathName: 'mysampleprojects',
    text: [
      { linkName: 'My Sample Projects', language: 'en' },
      { linkName: 'Örnek Projelerim', language: 'tr' },
    ],
    sourceName: 'mySampleProjects',
  },
  {
    id: 5,
    pathName: 'languageandskills',
    text: [
      { linkName: 'Foreign Languages & Skills', language: 'en' },
      { linkName: 'Yabancı Diller & Yetenekler', language: 'tr' },
    ],
    sourceName: 'languageAndSkills',
  },
  {
    id: 6,
    pathName: 'achievements',
    text: [
      { linkName: 'Achievements', language: 'en' },
      { linkName: 'Başarılar', language: 'tr' },
    ],
    sourceName: 'achievements',
  },
  {
    id: 7,
    pathName: 'certificates',
    text: [
      { linkName: 'Certificates', language: 'en' },
      { linkName: 'Sertifikalar', language: 'tr' },
    ],
    sourceName: 'certificates',
  },
  {
    id: 8,
    pathName: 'udemycertificates',
    text: [
      { linkName: 'Udemy Certificates', language: 'en' },
      { linkName: 'Udemy Sertifikaları', language: 'tr' },
    ],
    sourceName: 'udemyCertificates',
  },
  {
    id: 9,
    pathName: 'references',
    text: [
      { linkName: 'References', language: 'en' },
      { linkName: 'Referanslar', language: 'tr' },
    ],
    sourceName: 'references',
  },
  {
    id: 10,
    pathName: 'personelinfoandcontact',
    text: [
      { linkName: 'Personal Information & Contact', language: 'en' },
      { linkName: 'Kişisel Bilgiler & İletişim', language: 'tr' },
    ],
    sourceName: 'person',
  },
];
rootList.sort((a, b) => a.id - b.id);

function getLinkName(id, language = 'en') {
  return rootList
    .filter((item) => item.id === id)[0]
    .text.filter((item) => item.language === language)[0].linkName;
}

export { rootList, getLinkName };
