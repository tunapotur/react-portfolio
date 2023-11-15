import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';
import Loader from './Loader';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  return (
    <>
      <div className="flex h-full w-[48rem] flex-col items-center px-12 pt-12">
        {pageHeader && <h1 className="content-header">{pageHeader}</h1>}

        {isPending && <Loader />}

        {isError && <ErrorCart message={error.message} />}

        {!isPending && !isError && <>{children}</>}

        <PaginationAuto />
      </div>
    </>
  );
}
export default PageUi;
