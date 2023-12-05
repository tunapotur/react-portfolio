import ErrorCart from '../ui/ErrorCart';
import Loader from '../ui/Loader';

function ShowDataContent({ data, fnRender, language = 'en' }) {
  const filteredData = data.data?.filter((item) => item.language === language);

  const style = 'flex h-[50%] flex-col items-center justify-center';

  return (
    <>
      {data.isPending && (
        <div className={style}>
          <Loader />
        </div>
      )}

      {data.isError && (
        <div className={style}>
          <ErrorCart message={data.error.message} />
        </div>
      )}

      {!data.isPending && !data.isError && filteredData.map(fnRender)}
    </>
  );
}

export default ShowDataContent;
