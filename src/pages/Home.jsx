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
    <div className="content-narrow">
      <h3 className="text-3xl">Hi!</h3>
      <h1 className="mt-5 text-2xl font-bold sm:text-4xl">
        My name is <span>{data.fullName}</span>
      </h1>
      <h2 className="text-lg sm:text-xl">{data.occupation}</h2>
      <p className="mt-5 text-base sm:text-lg">
        This is my portfolio website where you can review my carrier and sample
        project
      </p>
      <img
        src="../main-page-user.jpg"
        alt="user navbar photo"
        className="image-dark mt-10 h-72 rounded-md"
      />
      <p className="mt-[3rem] text-sm font-thin italic leading-tight text-slate-400 dark:text-slate-500">
        You could use the left, and right arrow keys to navigate pages.
      </p>
    </div>
  );
}

export default Home;
