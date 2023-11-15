import Loader from '../ui/Loader';

function EmptyPage() {
  return (
    <div className="flex h-full w-[48rem] flex-col items-center px-12 pt-12">
      <h1 className="@apply mb-16 text-2xl font-semibold">Empty Test Page</h1>
      <div className="flex h-[50%] w-[50%] flex-col items-center justify-center">
        <Loader />
      </div>
    </div>
  );
}

export default EmptyPage;
