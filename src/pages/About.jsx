import { v4 as uuidv4 } from 'uuid';

import useGetData from '../hooks/useGetData';
import Pagination from '../ui/Pagination';

function About() {
  const { isPending, isError, error, data } = useGetData('person');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;

  function paragraph(el, key) {
    return <p key={key}>{el}</p>;
  }

  return (
    <>
      <div className="content-container">
        <h1 className="content-header">About Me</h1>

        <div className="readable-background flex flex-col space-y-5 text-justify text-xl leading-relaxed">
          {data.aboutMe.map((el) => paragraph(el, uuidv4()))}
        </div>

        <h2 className="ml-auto mt-12 text-2xl font-medium">{data.fullName}</h2>
      </div>

      <Pagination left={'home'} right={'education'} />
    </>
  );
}

export default About;
