import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';
import GeneralListUi from '../ui/GeneralListUi';

function References() {
  const { isPending, isError, error, data } = useGetData('references');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'References'}
    >
      <GeneralListUi
        data={data}
        render={(reference) => (
          <ReferencesCart key={reference.id} data={reference} />
        )}
      />
    </PageUi>
  );
}

function ReferencesCart({ data }) {
  return (
    <div className="readable-background border-color flex flex-col space-y-1 border p-4">
      <h3 className="font-semibold">{data.fullName}</h3>
      <div>{data.company}</div>
      <div>{data.vocation}</div>
      <div>{data.info}</div>
    </div>
  );
}

export default References;
