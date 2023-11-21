import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import GeneralListUi from '../ui/GeneralListUi';

import PageUi from '../ui/PageUi';

function Achievements() {
  const { isPending, isError, error, data } = useGetData('achievements');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Achievements'}
    >
      <GeneralListUi
        data={data?.filter((item) => item.language === 'en')}
        render={(achievement) => (
          <CertificateAchievementCart key={achievement.id} data={achievement} />
        )}
      />
    </PageUi>
  );
}

export default Achievements;
