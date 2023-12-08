const sidebarDictionary = [
  { download: 'Download', language: 'en' },
  { download: 'İndir', language: 'tr' },
];

const pageDictionary = [
  {
    page: 'home',
    text: [
      {
        hi: 'Hi',
        iam: 'I am',
        definition:
          'This is my portfolio website where you can review my carrier and sample project',
        pageUsage:
          'You can use the left and right arrow keys of the keyboard to navigate through the pages or you can swipe the screen left and right on mobile',
        language: 'en',
      },
      {
        hi: 'Merhaba',
        iam: 'Ben',
        definition:
          'Bu benim kariyerimi ve örnek projemi inceleyebileceğiniz portföy web sitemdir',
        pageUsage:
          'Sayfalar arasında gezinmek için klavyenin sol ve sağ ok tuşlarını kullanabilir veya mobil cihazlarda ekranı sola ve sağa kaydırabilirsiniz',
        language: 'tr',
      },
    ],
  },
  {
    page: 'about',
    text: [
      { header: 'About Me', language: 'en' },
      { header: 'Hakkımda', language: 'tr' },
    ],
  },
  {
    page: 'education',
    text: [
      { header: 'Education', language: 'en' },
      { header: 'Eğitim', language: 'tr' },
    ],
  },
  {
    page: 'workExperience',
    text: [
      {
        workExperience: 'Work Experience',
        internship: 'Internships',
        partTimeJobs: 'Part Time Jobs',
        language: 'en',
      },
      {
        workExperience: 'İş Deneyimi',
        internship: 'Stajlar',
        partTimeJobs: 'Yarı Zamanlı İşler',
        language: 'tr',
      },
    ],
  },
  {
    page: 'mySampleProjects',
    text: [
      { header: 'My Sample Projects', language: 'en' },
      { header: 'Benim Örnek Projelerim', language: 'tr' },
    ],
  },
  {
    page: 'education',
    text: [
      { header: 'Education', language: 'en' },
      { header: 'Eğitim', language: 'tr' },
    ],
  },
  {
    page: 'languageAndSkills',
    text: [
      {
        header: 'Foreign Languages & Skills',
        foreignLanguages: 'Foreign Languages',
        skills: 'Skills',
        language: 'en',
      },
      {
        header: 'Yabancı Diller & Yetenekler',
        foreignLanguages: 'Yabancı Diller',
        skills: 'Yetenekler',
        language: 'tr',
      },
    ],
  },
  {
    page: 'achievements',
    text: [
      { header: 'Achievements', language: 'en' },
      { header: 'Başarılar', language: 'tr' },
    ],
  },
];

function getPageDictionary(page, language = 'en') {
  return pageDictionary
    .filter((item) => item.page === page)[0]
    .text.filter((item) => item.language === language)[0];
}

function getSidebarDictionary(language = 'en') {
  return sidebarDictionary.filter((item) => item.language === language)[0];
}

export {
  pageDictionary,
  getPageDictionary,
  sidebarDictionary,
  getSidebarDictionary,
};
