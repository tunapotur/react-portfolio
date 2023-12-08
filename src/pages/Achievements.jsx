import { usePageLanguage } from '../context/PageLanguageContext';
import { getPageDictionary } from '../data/pageDictionary';
import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import PageControl from '../ui/PageControl';
import ShowDataContent from '../ui/ShowDataContent';

function Achievements() {
  const data = useGetData('achievements');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('achievements', getPageLanguageName());

  return (
    <PageControl>
      <AchievementsUi data={data} dictionary={dictionary} />
    </PageControl>
  );
}

function AchievementsUi() {
  const data = useGetData('achievements');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('achievements', getPageLanguageName());

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

export default Achievements;
