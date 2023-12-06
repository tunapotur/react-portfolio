import { v4 as uuidv4 } from 'uuid';
import useGetData from '../hooks/useGetData';

import ShowDataContent from '../ui/ShowDataContent';
import PageControl from '../ui/PageControl';

function About() {
  const data = useGetData('personalInfo');

  return (
    <PageControl>
      <ShowDataContent
        data={data}
        fnRender={(item) => <AboutUi key={1} data={item} />}
      />
    </PageControl>
  );
}

function AboutUi({ data }) {
  return (
    <>
      <h1 className="mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        About Me
      </h1>
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
