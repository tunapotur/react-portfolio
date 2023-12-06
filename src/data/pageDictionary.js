const pageDictionary = [
  {
    page: 'home',
    text: [
      {
        hi: 'Hi',
        iam: 'I am',
        definition:
          'This is my portfolio website where you can review my carrier and sample project',
        webPageUsage:
          'You could use the left, and right arrow keys to navigate pages',
        mobilPageUsage:
          'You could swift your finger left, and right to navigate pages',
        language: 'en',
      },
      {
        hi: 'Merhaba',
        iam: 'Ben',
        definition:
          'Bu benim kariyerimi ve örnek projemi inceleyebileceğiniz portföy web sitemdir',
        webPageUsage:
          'Sayfalarda gezinmek için sol ve sağ ok tuşlarını kullanabilirsiniz',
        mobilPageUsage:
          'Sayfalarda gezinmek için parmağınızı sola ve sağa kaydırabilirsiniz',
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
];

function getPageDictionary(page, language = 'en') {
  return pageDictionary
    .filter((item) => item.page === page)[0]
    .text.filter((item) => item.language === language)[0];
}

export { pageDictionary, getPageDictionary };
