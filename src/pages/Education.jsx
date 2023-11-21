import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';
import GeneralListUi from '../ui/GeneralListUi';

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
        data={data}
        render={(education) => (
          <EducationCart key={education.id} data={education} />
        )}
      />
    </PageUi>
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
          {`${data.startYear} -  ${data.endYear}`}
        </div>
      </div>
    </div>
  );
}

export default Education;
