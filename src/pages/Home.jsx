import useGetData from '../hooks/useGetData';
import PaginationAuto from '../ui/PaginationAuto';

function Home() {
  const { isPending, isError, error, data } = useGetData('person');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred:: {error.message}</span>;

  return (
    <>
      <div className="flex w-[28rem] flex-col items-center text-center">
        <h3 className="text-3xl">Hi!</h3>
        <h1 className="mt-5 text-4xl font-bold">
          My name is <span>{data.fullName}</span>
        </h1>
        <h2 className="text-xl">{data.occupation}</h2>
        <p className="mt-5 text-lg">
          This is my portfolio website where you can review my carrier and
          sample project
        </p>
        <img
          src="../main-page-user.jpg"
          alt="user navbar photo"
          className="mt-10 h-72 rounded-lg"
        />
      </div>

      <PaginationAuto />
    </>
  );
}

export default Home;
