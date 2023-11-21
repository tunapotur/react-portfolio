import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';

import PageUi from '../ui/PageUi';
import GeneralListUi from '../ui/GeneralListUi';

function Certificates() {
  const { isPending, isError, error, data } = useGetData('certificates');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Certificates'}
    >
      <GeneralListUi
        data={data?.filter((item) => item.language === 'en')}
        render={(certificate) => (
          <CertificateAchievementCart key={certificate.id} data={certificate} />
        )}
      />
    </PageUi>
  );
}

export default Certificates;
