import { useEducations } from '../hooks/useEducations';
import Pagination from '../ui/Pagination';

function Education() {
  const { isPending, isError, error, data } = useEducations();

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <div className="content-container">
        <h1 className="content-header">Education</h1>

        <div className="flex flex-col space-y-5">
          {data.map((el) => (
            <EducationCart key={el.id} data={el} />
          ))}
        </div>
      </div>

      <Pagination left={'about'} right={'workexperience'} />
    </>
  );
}

function EducationCart({ data }) {
  return (
    <div className="readable-background">
      <h2>{data.department}</h2>
      <div>{data.university}</div>
      <div>{data.graduation}</div>
      <div>
        <span>{data.startYear}</span> - <span>{data.endYear}</span>
      </div>
    </div>
  );
}

export default Education;
