import { usePageLanguage } from '../context/PageLanguageContext';
import { getPageDictionary } from '../data/pageDictionary';
import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import ShowDataContent from '../ui/ShowDataContent';

function Achievements() {
  const data = useGetData('achievements');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('achievements', getPageLanguageName());

  return <AchievementsUi data={data} dictionary={dictionary} />;
}

function AchievementsUi() {
  const data = useGetData('achievements');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('achievements', getPageLanguageName());

  return (
    <>
      <h1 className="page-header">{dictionary.header}</h1>

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

export default Achievements;
