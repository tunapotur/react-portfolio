import PaginationAuto from './PaginationAuto';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  return (
    <>
      <div className="content-container">
        {pageHeader && <h1 className="content-header">{pageHeader}</h1>}

        {isPending && 'loading...'}

        {isError && <span>An error has occurred: {error.message}</span>}

        {!isPending && !isError && <>{children}</>}
      </div>

      <PaginationAuto />
    </>
  );
}
export default PageUi;
