import { useWorkExperience } from '../hooks/useWorkExperience';
import Pagination from '../ui/Pagination';

function WorkExperience() {
  const { isPending, isError, error, data } = useWorkExperience();

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <div className="content-container w-full">
        <h1 className="content-header">Work Experience</h1>

        <div className="flex w-full flex-col space-y-7">
          {data.work.map((el) => (
            <WorkExperienceCart key={el.id} data={el} />
          ))}
        </div>

        <h2 className="mb-3 mt-12 self-start text-xl font-semibold">
          Internship
        </h2>
        <div className="flex w-full flex-col space-y-3">
          {data.internship.map((el) => (
            <InternshipPartTimeCart key={el.id} data={el} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 self-start text-xl font-semibold">
          Part-time Jobs
        </h2>
        <div className="flex w-full flex-col space-y-3">
          <InternshipPartTimeCart data={data.partTimeJob} />
        </div>
      </div>

      <Pagination left={'education'} right={'mysampleprojects'} />
    </>
  );
}

function WorkExperienceCart({ data }) {
  return (
    <div className="readable-background flex flex-col space-y-1 border border-slate-800 p-4">
      <div className={'flex flex-row justify-between space-x-2'}>
        <div>
          <h3 className="font-semibold">{data.header}</h3>
          <div className="italic">{data.company}</div>
          <div className="italic">{data.address}</div>
        </div>

        <div className="text-right text-sm">
          <div>{data.startDate}</div>
          <div>{data.endDate}</div>
        </div>
      </div>

      <div>{data.explanation}</div>
    </div>
  );
}

function InternshipPartTimeCart({ data }) {
  return (
    <div className="readable-background flex flex-col space-y-1 border border-slate-600 p-2">
      <div>
        {data.starYear} - {data.endYear} {data.company}
      </div>
      {data.explanation && <div>{data.explanation}</div>}
    </div>
  );
}

export default WorkExperience;
