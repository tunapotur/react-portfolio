import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function WorkExperience() {
  const { isPending, isError, error, data } = useGetData('workExperience');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Work Experience'}
    >
      <WorkExperienceUi data={data} />
    </PageUi>
  );
}

function WorkExperienceUi({ data }) {
  return (
    <>
      <div className="content-data">
        {data.work.map((el) => (
          <WorkExperienceCart key={el.id} data={el} />
        ))}
      </div>

      <h2 className="mb-3 mt-12 self-start text-xl font-semibold">
        Internship
      </h2>
      <div className="content-data">
        {data.internship.map((el) => (
          <InternshipPartTimeCart key={el.id} data={el} />
        ))}
      </div>

      <h2 className="mb-3 mt-6 self-start text-xl font-semibold">
        Part-time Jobs
      </h2>
      <div className="content-data">
        <InternshipPartTimeCart data={data.partTimeJob} />
      </div>
    </>
  );
}

function WorkExperienceCart({ data }) {
  return (
    <div className="readable-background border-color flex flex-col space-y-1 border p-4">
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
    <div className="readable-background border-color flex flex-col space-y-1 border p-2">
      <div>
        {data.starYear} - {data.endYear} {data.company}
      </div>
      {data.explanation && <div>{data.explanation}</div>}
    </div>
  );
}

export default WorkExperience;
