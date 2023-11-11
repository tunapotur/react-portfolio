import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';

import PageUi from '../ui/PageUi';

function UdemyCertificates() {
  const { isPending, isError, error, data } = useGetData('udemyCertificates');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Udemy Certificates'}
    >
      <UdemyCertificatesUi data={data} />
    </PageUi>
  );
}

function UdemyCertificatesUi({ data }) {
  return (
    <div className="content-data">
      {data.map((el) => (
        <CertificateAchievementCart key={el.id} data={el} />
      ))}
    </div>
  );
}

export default UdemyCertificates;
