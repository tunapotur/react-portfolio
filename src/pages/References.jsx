import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function References() {
  const { isPending, isError, error, data } = useGetData('references');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'References'}
    >
      <ReferencesUi data={data} />
    </PageUi>
  );
}

function ReferencesUi({ data }) {
  return (
    <div className="content-data">
      {data.map((el) => (
        <ReferencesCart key={el.id} data={el} />
      ))}
    </div>
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
