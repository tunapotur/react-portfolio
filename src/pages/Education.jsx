import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function Education() {
  const { isPending, isError, error, data } = useGetData('education');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Education'}
    >
      <EducationPageUi data={data} />
    </PageUi>
  );
}

function EducationPageUi({ data }) {
  return (
    <div className="content-data">
      {data.map((el) => (
        <EducationCart key={el.id} data={el} />
      ))}
    </div>
  );
}

function EducationCart({ data }) {
  const row_item =
    'flex flex-col sm:flex-row justify-between sm:space-x-4 space-x-0 leading-tight sm:leading-normal';
  return (
    <div className="readable-background border-color flex w-[16rem] flex-col space-y-1 border px-3 py-2 sm:w-[30rem] sm:space-y-2 sm:px-4 sm:py-3">
      <div className={row_item}>
        <h2 className="font-semibold">{data.department}</h2>
        <div className="text-left sm:text-right">{data.university}</div>
      </div>

      <div className={row_item}>
        <div className="italic">{data.graduation}</div>
        <div className="text-left sm:text-right">
          {`${data.startYear} -  ${data.endYear}`}
        </div>
      </div>
    </div>
  );
}

export default Education;
