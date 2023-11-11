import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';

import PageUi from '../ui/PageUi';

function Certificates() {
  const { isPending, isError, error, data } = useGetData('certificates');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Certificates'}
    >
      <CertificatesUi data={data} />
    </PageUi>
  );
}

function CertificatesUi({ data }) {
  return (
    <div className="flex w-full flex-col space-y-7">
      {data.map((el) => (
        <CertificateAchievementCart key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Certificates;
