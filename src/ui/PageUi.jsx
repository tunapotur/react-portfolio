import { ImSpinner2 } from 'react-icons/im';
import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  return (
    <>
      <div className="content-container">
        {pageHeader && <h1 className="content-header">{pageHeader}</h1>}

        {isPending && (
          <ImSpinner2 className="h-24 w-24 animate-spin fill-amber-600/40" />
        )}

        {isError && <ErrorCart message={error.message} />}

        {!isPending && !isError && <>{children}</>}
      </div>

      <PaginationAuto />
    </>
  );
}
export default PageUi;
