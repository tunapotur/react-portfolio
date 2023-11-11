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
    <div className="flex w-full flex-col space-y-7">
      {data.map((el) => (
        <CertificateAchievementCart key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Achievements;
