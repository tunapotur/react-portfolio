import { useState } from 'react';
import useGetData from '../hooks/useGetData';
import CertificateAchievementCart from '../ui/CertificateAchievementCart';
import { PAGE_SIZE } from '../data/constants';

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
  const itemCount = data.length;
  const maxPageCount = Math.ceil(itemCount / PAGE_SIZE) * PAGE_SIZE;
  const [page, setPage] = useState(1);

  if (itemCount <= PAGE_SIZE)
    return (
      <div className="content-data">
        {data.map((el) => (
          <CertificateAchievementCart key={el.id} data={el} />
        ))}
      </div>
    );

  return (
    <>
      <div className="content-data">
        {data.slice(0, PAGE_SIZE * page).map((el) => (
          <CertificateAchievementCart key={el.id} data={el} />
        ))}
      </div>
      {PAGE_SIZE * page < maxPageCount && (
        <button
          className="link mt-16"
          onClick={() => setPage((p) => (p = p + 1))}
        >
          Show More..
        </button>
      )}
    </>
  );
}

export default Certificates;
