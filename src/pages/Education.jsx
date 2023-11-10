import useGetData from '../hooks/useGetData';
import PaginationAuto from '../ui/PaginationAuto';

function Education() {
  const { isPending, isError, error, data } = useGetData('education');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <div className="content-container w-full">
        <h1 className="content-header">Education</h1>

        <div className="flex w-full flex-col space-y-7">
          {data.map((el) => (
            <EducationCart key={el.id} data={el} />
          ))}
        </div>
      </div>

      <PaginationAuto />
    </>
  );
}

function EducationCart({ data }) {
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

export default Education;
