import { usePageLanguage } from '../context/PageLanguageContext';
import ErrorCart from '../ui/ErrorCart';
import Loader from '../ui/Loader';

// TODO sayfa başlıkları için bir çözüm düşün.
// TODO veribananında olamyan site içinde kullanılan sayfa başlığı gibi metinlerin dil değişimi için bir çözüm düşün
function ShowDataContent({ data, fnRender }) {
  const { getPageLanguage } = usePageLanguage();
  const pageLanguage = getPageLanguage().name.toLowerCase();

  const filteredData = data.data?.filter(
    (item) => item.language === pageLanguage,
  );

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
