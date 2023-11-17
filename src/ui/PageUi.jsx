import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';
import Loader from './Loader';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  const style = 'flex h-[50%] flex-col items-center justify-center';

  return (
    <>
      <div className="flex h-full flex-col items-center px-4 pt-12 sm:px-12 md:w-[48rem]">
        {pageHeader && (
          <h1 className="@apply mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
            {pageHeader}
          </h1>
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
