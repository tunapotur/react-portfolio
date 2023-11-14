import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function Home() {
  const { isPending, isError, error, data } = useGetData('person');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={''}
    >
      <HomeUi data={data} />
    </PageUi>
  );
}

function HomeUi({ data }) {
  return (
    <div className="content-data-28rem text-center">
      <h3 className="text-3xl">Hi!</h3>
      <h1 className="mt-5 text-4xl font-bold">
        My name is <span>{data.fullName}</span>
      </h1>
      <h2 className="text-xl">{data.occupation}</h2>
      <p className="mt-5 text-lg">
        This is my portfolio website where you can review my carrier and sample
        project
      </p>
      <img
        src="../main-page-user.jpg"
        alt="user navbar photo"
        className="image-dark mt-10 h-72 rounded-md"
      />
    </div>
  );
}

export default Home;
