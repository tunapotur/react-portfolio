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
    <div className="content-data">
      {data.map((el) => (
        <CertificateAchievementCart key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Certificates;
