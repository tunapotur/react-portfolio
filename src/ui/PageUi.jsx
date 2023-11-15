import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';
import Loader from './Loader';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  const style = 'flex h-[50%] flex-col items-center justify-center';
  return (
    <>
      <div className="flex h-full w-[48rem] flex-col items-center px-12 pt-12">
        {pageHeader && (
          <h1 className="@apply mb-16 text-2xl font-semibold">{pageHeader}</h1>
        )}

        {isPending && (
          <div className={style}>
            <Loader />
          </div>
        )}

        {isError && (
          <div className={style}>
            <ErrorCart message={error.message} />
          </div>
        )}

        {!isPending && !isError && (
          <>
            {children}
            <PaginationAuto />
          </>
        )}
      </div>
    </>
  );
}
export default PageUi;
