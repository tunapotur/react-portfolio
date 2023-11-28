import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';
import Loader from './Loader';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center px-4 pt-6 sm:px-12 md:w-[48rem]">
        {pageHeader && (
          <h1 className="@apply mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
            {pageHeader}
          </h1>
        )}

        {isPending && (
          <div className={'error-loader'}>
            <Loader />
          </div>
        )}

        {isError && (
          <div className={'error-loader'}>
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
