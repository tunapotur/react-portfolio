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

      <h2 className="mb-3 mt-8 self-start text-xl font-semibold">Internship</h2>
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
    <div className="readable-background border-color flex flex-col border p-4">
      <div className={'flex flex-row justify-between space-x-2 text-left'}>
        <h3 className="font-semibold">{data.header}</h3>
        <div className="text-right text-sm">
          {`${data.startDate} -  ${data.endDate}`}
        </div>
      </div>

      <div className="text-left text-sm italic leading-tight">{`${data.company}. ${data.address}`}</div>
      <div className="mt-1">{data.explanation}</div>
    </div>
  );
}

function InternshipPartTimeCart({ data }) {
  return (
    <div className="readable-background border-color flex flex-col space-y-1 border p-2 text-left">
      <div>
        {data.starYear} - {data.endYear} {data.company}
      </div>
      {data.explanation && <div>{data.explanation}</div>}
    </div>
  );
}

export default WorkExperience;
