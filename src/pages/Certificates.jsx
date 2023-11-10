import { useGetData } from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import Pagination from '../ui/Pagination';

function Certificates() {
  const { isPending, isError, error, data } = useGetData('certificates');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;
  return (
    <>
      <div className="content-container w-full">
        <h1 className="content-header">Certificates</h1>
        <div className="flex w-full flex-col space-y-7">
          {data.map((el) => (
            <CertificateAchievementCart key={el.id} data={el} />
          ))}
        </div>
      </div>
      <Pagination left={'achievements'} right={'udemycertificates'} />
    </>
  );
}

export default Certificates;
