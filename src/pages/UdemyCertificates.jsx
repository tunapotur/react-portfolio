import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import GeneralListUi from '../ui/GeneralListUi';

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
      <GeneralListUi
        data={data}
        render={(udemyCertificate) => (
          <CertificateAchievementCart
            key={udemyCertificate.id}
            data={udemyCertificate}
          />
        )}
      />
    </PageUi>
  );
}

export default UdemyCertificates;
