import { useGetData } from '../hooks/useGetData';
import Pagination from '../ui/Pagination';

function References() {
  const { isPending, isError, error, data } = useGetData('references');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;
  return (
    <>
      <div className="content-container w-full">
        <h1 className="content-header">References</h1>

        <div className="flex w-full flex-col space-y-7">
          {data.map((el) => (
            <ReferencesCart key={el.id} data={el} />
          ))}
        </div>
      </div>

      <Pagination left={'udemycertificates'} right={'personelinfoandcontact'} />
    </>
  );
}

function ReferencesCart({ data }) {
  return (
    <div className="readable-background flex flex-col space-y-1 border border-slate-800 p-4">
      <h3 className="font-semibold">{data.fullName}</h3>
      <div>{data.company}</div>
      <div>{data.vocation}</div>
      <div>{data.info}</div>
    </div>
  );
}

export default References;
