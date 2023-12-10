import { usePageLanguage } from '../context/PageLanguageContext';
import ErrorCart from '../ui/ErrorCart';
import Loader from '../ui/Loader';
import { useState } from 'react';
import { PAGE_SIZE } from '../data/constants';
import { getPageDictionary } from '../data/pageDictionary';

function ShowDataContent({ data, fnRender }) {
  const [page, setPage] = useState(1);
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary(
    'showDataContent',
    getPageLanguageName(),
  );

  const filteredData = data.data?.filter(
    (item) => item.language === getPageLanguageName(),
  );

  const stylePendingError = 'flex h-[50%] flex-col items-center justify-center';

  if (data.isPending)
    return (
      <div className={stylePendingError}>
        <Loader />
      </div>
    );

  if (data.isError)
    return (
      <div className={stylePendingError}>
        <ErrorCart message={data.error.message} />
      </div>
    );

  const itemCount = filteredData.length;
  const maxPageCount = Math.ceil(itemCount / PAGE_SIZE) * PAGE_SIZE;
  const hiddenItemsCount = itemCount - PAGE_SIZE * page;

  if (itemCount <= PAGE_SIZE) return <>{filteredData.map(fnRender)}</>;

  return (
    <>
      <>{filteredData.slice(0, PAGE_SIZE * page).map(fnRender)}</>
      <div className="w-full">
        {PAGE_SIZE * page < maxPageCount && (
          <button
            className="mt-[2rem] h-[3rem] w-full rounded border border-slate-400/75 bg-stone-100/30 text-lg transition-colors hover:bg-slate-200/25  dark:border-slate-700/75 dark:bg-zinc-800/30 hover:dark:bg-zinc-600/30"
            onClick={() => setPage((p) => (p = p + 1))}
          >
            {`${dictionary.rest} ${hiddenItemsCount}. ${dictionary.show} ${
              hiddenItemsCount >= PAGE_SIZE ? PAGE_SIZE : hiddenItemsCount
            }.`}
          </button>
        )}
      </div>
    </>
  );
}

export default ShowDataContent;
