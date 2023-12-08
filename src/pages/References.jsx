import useGetData from '../hooks/useGetData';
import { getPageDictionary } from '../data/pageDictionary';
import { usePageLanguage } from '../context/PageLanguageContext';
import ShowDataContent from '../ui/ShowDataContent';

function References() {
  const data = useGetData('references');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('references', getPageLanguageName());

  return <ReferencesUi data={data} dictionary={dictionary} />;
}

function ReferencesUi({ data, dictionary }) {
  return (
    <>
      <h1 className="mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        {dictionary.header}
      </h1>

      <div className="content-data">
        <ShowDataContent
          data={data}
          fnRender={(item) => <ReferencesCart key={item.id} data={item} />}
        />
      </div>
    </>
  );
}

function ReferencesCart({ data }) {
  return (
    <div className="readable-background border-color flex flex-col space-y-1 border p-4">
      <h3 className="font-semibold">{data.name}</h3>
      <div>{data.company}</div>
      <div>{data.vocation}</div>
      <div>{data.info}</div>
    </div>
  );
}

export default References;
