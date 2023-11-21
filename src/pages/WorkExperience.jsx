import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';
import GeneralListUi from '../ui/GeneralListUi';

// TODO work experience alanı önceden tek veriden çalışıyordu şimdi 3 farklı veriyi alıp yüklemek gerek
function WorkExperience() {
  const { isPending, isError, error, data } = useGetData('workExperience');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Work Experience'}
    >
      <WorkExperienceUi data={data?.filter((item) => item.language === 'en')} />
    </PageUi>
  );
}

function WorkExperienceUi({ data }) {
  return (
    <>
      <GeneralListUi
        data={data.workExperience}
        render={(work) => <WorkExperienceCart key={work.id} data={work} />}
      />

      <h2 className="mb-3 mt-8 self-start text-xl font-semibold">Internship</h2>
      <GeneralListUi
        data={data.internship}
        render={(internship) => (
          <InternshipPartTimeCart key={internship.id} data={internship} />
        )}
      />

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

      <div className="text-left text-sm italic leading-tight">{`${data.company}.`}</div>
      <div className="mt-1">{data.explanation}</div>
    </div>
  );
}

function InternshipPartTimeCart({ data }) {
  return (
    <div className="readable-background border-color flex flex-col space-y-1 border p-2 text-left">
      <div>
        {data.startDate} - {data.endDate} {data.company}
      </div>
      {data.explanation && <div>{data.explanation}</div>}
    </div>
  );
}

export default WorkExperience;
