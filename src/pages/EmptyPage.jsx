import PageUi from '../ui/PageUi';
import useGetData from '../hooks/useGetData';

import Loader from '../ui/Loader';
import ErrorCart from '../ui/ErrorCart';

function EmptyPage() {
  const { isPending, isError, error } = useGetData('sampleProjects');
  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Test Page'}
    >
      <TestUi />
    </PageUi>
  );
}

function TestUi() {
  return (
    <>
      <div className={'error-loader'}>
        <Loader />
      </div>

      <div className={'error-loader'}>
        <ErrorCart message={'Network Error'} />
      </div>
    </>
  );
}

export default EmptyPage;
