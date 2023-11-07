import { v4 as uuidv4 } from 'uuid';

import { usePersonalInfo } from '../hooks/usePersonalInfo';
import Pagination from '../ui/Pagination';

function About() {
  const { isPending, isError, error, data } = usePersonalInfo();

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred:: {error.message}</span>;

  function paragraph(el, key) {
    return <p key={key}>{el}</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>About</h1>
        <div>{data.whoAmI.map((el) => paragraph(el, uuidv4()))}</div>
      </div>
      <Pagination left={'home'} right={'education'} />
    </>
  );
}

export default About;
