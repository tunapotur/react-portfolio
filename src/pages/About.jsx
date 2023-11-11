import { v4 as uuidv4 } from 'uuid';

import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function About() {
  const { isPending, isError, error, data } = useGetData('person');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'About Me'}
    >
      <AboutUi data={data} />
    </PageUi>
  );
}

function AboutUi({ data }) {
  return (
    <>
      <div className="readable-background flex flex-col space-y-5 text-justify text-xl leading-relaxed">
        {data.aboutMe.map((el) => (
          <p key={uuidv4()}>{el}</p>
        ))}
      </div>

      <h2 className="ml-auto mt-12 text-2xl font-medium">{data.fullName}</h2>
    </>
  );
}

export default About;
