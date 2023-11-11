import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';

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
      <AchievementsUi data={data} />
    </PageUi>
  );
}

function AchievementsUi({ data }) {
  return (
    <div className="content-data">
      {data.map((el) => (
        <CertificateAchievementCart key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Achievements;
