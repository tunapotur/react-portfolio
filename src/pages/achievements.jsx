import { useGetData } from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import Pagination from '../ui/Pagination';

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

      <Pagination left={'languageandskills'} right={'certificates'} />
    </>
  );
}

export default Achievements;
