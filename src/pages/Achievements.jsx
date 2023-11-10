import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import PaginationAuto from '../ui/PaginationAuto';

function Achievements() {
  const { isPending, isError, error, data } = useGetData('achievements');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;
  return (
    <>
      <div className="content-container w-full">
        <h1 className="content-header">Achievements</h1>
        <div className="flex w-full flex-col space-y-7">
          {data.map((el) => (
            <CertificateAchievementCart key={el.id} data={el} />
          ))}
        </div>
      </div>

      <PaginationAuto />
    </>
  );
}

export default Achievements;
