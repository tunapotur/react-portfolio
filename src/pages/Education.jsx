import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';
import GeneralListUi from '../ui/GeneralListUi';
import PageControl from '../ui/PageControl';
import { getPageDictionary } from '../data/pageDictionary';
import { usePageLanguage } from '../context/PageLanguageContext';

function Education() {
  const { isPending, isError, error, data } = useGetData('education');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Education'}
    >
      <GeneralListUi
        data={data?.filter((item) => item.language === 'en')}
        render={(education) => (
          <EducationCart key={education.id} data={education} />
        )}
      />
    </PageUi>
  );
}

function Education2() {
  const data = useGetData('education');
  return (
    <PageControl>
      <ShowDataContent
        data={data}
        fnRender={(item) => <AboutUi key={1} data={item} />}
      />
    </PageControl>
  );
}

function EducationUi({ data }) {
  const { getPageLanguageName } = usePageLanguage();
  return (
    <>
      <h1 className="mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        {getPageDictionary('education', getPageLanguageName()).header}
      </h1>
      <div className="readable-background flex flex-col space-y-7 px-6 text-left text-lg leading-relaxed sm:text-justify sm:text-xl">
        {data.coverLetter.map((el) => (
          <p key={uuidv4()}>{el}</p>
        ))}
      </div>

      <h2 className="ml-auto mr-12 mt-12 text-xl font-medium sm:mr-6 sm:text-2xl">
        {data.name}
      </h2>
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
