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
        {data.partTimeJob.company}
        <div className="flex w-full flex-col space-y-7"></div>
      </div>
      <Pagination left={'education'} right={'mysampleprojects'} />
    </>
  );
}

function WorkExperienceCart({ data }) {
  const row_item = 'flex flex-row justify-between space-x-2';
  return (
    <div className="readable-background flex flex-col space-y-3 border border-slate-800 p-4">
      <div className={row_item}>
        <h2 className="font-semibold">{data.department}</h2>
        <div className="text-right">{data.university}</div>
      </div>

      <div className={row_item}>
        <div className="italic">{data.graduation}</div>
        <div>
          <span>{data.startYear}</span> - <span>{data.endYear}</span>
        </div>
      </div>
    </div>
  );
}
export default WorkExperience;
