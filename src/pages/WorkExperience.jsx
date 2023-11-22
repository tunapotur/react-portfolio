import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

import PaginationAuto from '../ui/PaginationAuto';
import ShowDataContent from '../ui/ShowDataContent';

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
    <>
      <div className="flex h-full flex-col items-center px-4 pt-12 sm:px-12 md:w-[48rem]">
        <ShowDataContent
          data={workExperience}
          header={'Work Experience'}
          fnRender={(item) => <WorkExperienceCart key={item.id} data={item} />}
          fnFilter={(item) => item.language === 'en'}
        />

        <h2 className="mb-3 mt-8 self-start text-xl font-semibold">
          Internship
        </h2>
        <ShowDataContent
          data={internship}
          fnRender={(item) => (
            <InternshipPartTimeCart key={item.id} data={item} />
          )}
          fnFilter={(item) => item.language === 'en'}
        />

        <h2 className="mb-3 mt-8 self-start text-xl font-semibold">
          Part Time Jobs
        </h2>
        <ShowDataContent
          data={partTimeJobs}
          fnRender={(item) => (
            <InternshipPartTimeCart key={item.id} data={item} />
          )}
          fnFilter={(item) => item.language === 'en'}
        />

        <PaginationAuto />
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
