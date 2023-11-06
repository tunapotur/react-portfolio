import Pagination from '../ui/Pagination';

function UdemyCertificates() {
  return (
    <>
      <div>
        <h1>Udemy Certificates</h1>
      </div>
      <Pagination left={'certificates'} right={'references'} />
    </>
  );
}

export default UdemyCertificates;
