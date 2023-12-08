import { usePageLanguage } from '../context/PageLanguageContext';
import { getPageDictionary } from '../data/pageDictionary';
import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import ShowDataContent from '../ui/ShowDataContent';

function UdemyCertificates() {
  const data = useGetData('udemyCertificates');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary(
    'udemyCertificates',
    getPageLanguageName(),
  );

  return <UdemyCertificatesUi data={data} dictionary={dictionary} />;
}

function UdemyCertificatesUi() {
  const data = useGetData('udemyCertificates');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary(
    'udemyCertificates',
    getPageLanguageName(),
  );

  return (
    <>
      <h1 className="mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        {dictionary.header}
      </h1>

      <div className="content-data">
        <ShowDataContent
          data={data}
          fnRender={(item) => (
            <CertificateAchievementCart key={item.id} data={item} />
          )}
        />
      </div>
    </>
  );
}

export default UdemyCertificates;
