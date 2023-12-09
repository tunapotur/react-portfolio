import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

import ShowDataContent from '../ui/ShowDataContent';
import { usePageLanguage } from '../context/PageLanguageContext';
import { getPageDictionary } from '../data/pageDictionary';

function WorkExperience() {
  // https://www.js-howto.com/how-to-handle-multiple-queries-with-react-query/
  // https://tanstack.com/query/v5/docs/react/reference/useQueries
  const [workExperience, internship, partTimeJobs] = useQueries({
    queries: [
      {
        queryKey: ['workExperience'],
        queryFn: () =>
          axios
            .get(`${import.meta.env.VITE_DB}/${'workExperience'}`)
            .then((res) => res.data),
      },
      {
        queryKey: ['internship'],
        queryFn: () =>
          axios
            .get(`${import.meta.env.VITE_DB}/${'internship'}`)
            .then((res) => res.data),
      },
      {
        queryKey: ['partTimeJobs'],
        queryFn: () =>
          axios
            .get(`${import.meta.env.VITE_DB}/${'partTimeJobs'}`)
            .then((res) => res.data),
      },
    ],
  });

  return (
    <WorkExperienceUi
      data={{ workExperience, internship, partTimeJobs }}
    ></WorkExperienceUi>
  );
}

function WorkExperienceUi({ data }) {
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('workExperience', getPageLanguageName());

  return (
    <>
      <h1 className="page-header">
        {dictionary.workExperience}
      </h1>
      <div className="content-data">
        <ShowDataContent
          data={data.workExperience}
          fnRender={(item) => <WorkExperienceCart key={item.id} data={item} />}
        />
      </div>

      <h2 className="mb-3 mt-8 self-start text-xl font-semibold">
        {dictionary.internship}
      </h2>
      <div className="content-data">
        <ShowDataContent
          data={data.internship}
          fnRender={(item) => (
            <InternshipPartTimeCart key={item.id} data={item} />
          )}
        />
      </div>

      <h2 className="mb-3 mt-8 self-start text-xl font-semibold">
        {dictionary.partTimeJobs}
      </h2>
      <div className="content-data">
        <ShowDataContent
          data={data.partTimeJobs}
          fnRender={(item) => (
            <InternshipPartTimeCart key={item.id} data={item} />
          )}
          fnFilter={(item) => item.language === 'en'}
        />
      </div>
    </>
  );
}

function WorkExperienceCart({ data }) {
  return (
    <div className="readable-background border-color flex flex-col border p-4">
      <div className={'flex flex-row justify-between space-x-2 text-left'}>
        <h3 className="font-semibold">{data.header}</h3>
        <div className="text-right text-sm">
          {`${data.startDate} -  ${data.endDate}`}
        </div>
      </div>

      <div className="text-left text-sm italic leading-tight">{`${data.company}.`}</div>
      <div className="mt-1">{data.explanation}</div>
    </div>
  );
}

function InternshipPartTimeCart({ data }) {
  return (
    <div className="readable-background border-color flex w-full flex-col space-y-1 border p-2 text-left">
      <div>
        {data.startDate} - {data.endDate} {data.company}
      </div>
      {data.explanation && <div>{data.explanation}</div>}
    </div>
  );
}

export default WorkExperience;
