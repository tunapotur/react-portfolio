import { v4 as uuidv4 } from 'uuid';
import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function About() {
  const { isPending, isError, error, data } = useGetData('personalInfo');
  const filteredData = data?.filter((item) => item.language === 'en')[0];

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'About Me'}
    >
      <AboutUi data={filteredData} />
    </PageUi>
  );
}

function AboutUi({ data }) {
  return (
    <>
      <div className="readable-background flex flex-col space-y-7 px-6 text-left text-lg leading-relaxed sm:text-justify sm:text-xl">
        {data.coverLetter.map((el) => (
          <p key={uuidv4()}>{el}</p>
        ))}
      </div>

      <h2 className="ml-auto mr-12 mt-12 text-xl font-medium sm:mr-6 sm:text-2xl">
        {data.name}
      </h2>
    </>
  );
}

export default About;
