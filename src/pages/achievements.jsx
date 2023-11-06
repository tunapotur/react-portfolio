import Pagination from '../ui/Pagination';

function Achievements() {
  return (
    <>
      <div>
        <h1>Achievements</h1>
      </div>
      <Pagination left={'languageandskills'} right={'certificates'} />
    </>
  );
}

export default Achievements;
