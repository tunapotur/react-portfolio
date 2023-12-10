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
      { header: 'Örnek Projelerim', language: 'tr' },
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
  {
    page: 'certificates',
    text: [
      { header: 'Certificates', language: 'en' },
      { header: 'Sertifikalar', language: 'tr' },
    ],
  },
  {
    page: 'udemyCertificates',
    text: [
      { header: 'Udemy Certificates', language: 'en' },
      { header: 'Udemy Sertifikalar', language: 'tr' },
    ],
  },
  {
    page: 'references',
    text: [
      { header: 'References', language: 'en' },
      { header: 'Referanslar', language: 'tr' },
    ],
  },
  {
    page: 'personalInfo',
    text: [
      {
        header: 'Personal Information & Contact',
        address: 'Address',
        dateOfBirth: 'Date of Birth',
        gender: 'Gender',
        driveLicense: 'Drive License',
        socialMediaAddress: 'Social Media Address',
        email: 'E-Mail',
        language: 'en',
      },
      {
        header: 'Kişisel Bilgiler & İletişim',
        address: 'Adres',
        dateOfBirth: 'Doğum Tarihi',
        gender: 'Cinsiyet',
        driveLicense: 'Sürücü Ehliyeti',
        socialMediaAddress: 'Sosyal Medya Adresleri',
        email: 'E-Mail',
        language: 'tr',
      },
    ],
  },
  {
    page: 'pageNotFound',
    text: [
      {
        speechBubble:
          'Why did you wake me up? I need to sleep. Please click the go back button.',
        opps: 'Oops!',
        warning: 'The page you are looking for could not be found.',
        button: 'Go Back',
        language: 'en',
      },
      {
        speechBubble:
          'Beni neden uyandırdın? Uyumam lazım. Lütfen geri dön butonuna bas.',
        opps: 'Oops!',
        warning: 'Aradığınız sayfa bulunamadı.',
        button: 'Geri Dön',
        language: 'tr',
      },
    ],
  },
  {
    page: 'showDataContent',
    text: [
      {
        rest: 'Rest',
        show: 'Show',
        language: 'en',
      },
      {
        rest: 'Kalan',
        show: 'Göster',
        language: 'tr',
      },
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
