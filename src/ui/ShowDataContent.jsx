import ErrorCart from '../ui/ErrorCart';
import Loader from '../ui/Loader';

function ShowDataContent({ data, header, fnRender, fnFilter }) {
  const filteredData = fnFilter ? data.data?.filter(fnFilter) : data.data;

  const style = 'flex h-[50%] flex-col items-center justify-center';

  // TODO GeneralListUi componentinde bulunan show more özelliğini buraya uyarla. Sonrasında tüm sayfalarda PageUi ve GeneralListUi'in kaldırılması denenecek
  return (
    <div className="content-data">
      {header && (
        <h1 className="@apply mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
          {header}
        </h1>
      )}

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
    </div>
  );
}

export default ShowDataContent;
