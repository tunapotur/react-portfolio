import Pagination from '../ui/Pagination';

function Certificates() {
  return (
    <>
      <div>
        <h1>Certificates</h1>
      </div>
      <Pagination left={'achievements'} right={'udemycertificates'} />
    </>
  );
}

export default Certificates;
