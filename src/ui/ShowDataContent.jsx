import ErrorCart from '../ui/ErrorCart';
import Loader from '../ui/Loader';

function ShowDataContent({ data, fnRender, fnFilter }) {
  const filteredData = fnFilter ? data.data?.filter(fnFilter) : data.data;

  const style = 'flex h-[50%] flex-col items-center justify-center';

  // TODO GeneralListUi componentinde bulunan show more özelliğini buraya uyarla. Sonrasında tüm sayfalarda PageUi ve GeneralListUi'in kaldırılması denenecek
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