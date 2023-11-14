import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';
import Loader from './Loader';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  return (
    <>
      <div className="content-container">
        {pageHeader && <h1 className="content-header">{pageHeader}</h1>}

        {isPending && <Loader />}

        {isError && <ErrorCart message={error.message} />}

        {!isPending && !isError && <>{children}</>}
      </div>

      <PaginationAuto />
    </>
  );
}
export default PageUi;
