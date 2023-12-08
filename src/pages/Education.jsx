import useGetData from '../hooks/useGetData';
import { getPageDictionary } from '../data/pageDictionary';
import { usePageLanguage } from '../context/PageLanguageContext';
import ShowDataContent from '../ui/ShowDataContent';

function Education() {
  const data = useGetData('education');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('education', getPageLanguageName());

  return <EducationUi data={data} dictionary={dictionary} />;
}

function EducationUi({ data, dictionary }) {
  return (
    <>
      <h1 className="mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        {dictionary.header}
      </h1>

      <div className="content-data">
        <ShowDataContent
          data={data}
          fnRender={(item) => <EducationCart key={item.id} data={item} />}
        />
      </div>
    </>
  );
}

function EducationCart({ data }) {
  const row_item = 'flex flex-row justify-between space-x-4';
  return (
    <div className="readable-background border-color w-full flex-col space-y-4 border px-5 py-4 leading-tight">
      <div className={row_item}>
        <h2 className="text-left font-semibold">{data.department}</h2>
        <div className="text-right">{data.university}</div>
      </div>

      <div className={row_item}>
        <div className="text-left italic">{data.graduation}</div>
        <div className="text-right">
          {`${data.startDate} -  ${data.endDate}`}
        </div>
      </div>
    </div>
  );
}

export default Education;
