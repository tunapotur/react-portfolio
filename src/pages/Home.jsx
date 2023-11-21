import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function Home() {
  const { isPending, isError, error, data } = useGetData('personalInfo');
  const filteredData = data?.filter((item) => item.language === 'en')[0];

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={''}
    >
      <HomeUi data={filteredData} />
    </PageUi>
  );
}

function HomeUi({ data }) {
  return (
    <div className="content-narrow">
      <h3 className="text-3xl">Hi!</h3>
      <h1 className="mt-5 text-2xl font-bold sm:text-4xl">
        My name is <span>{data.name}</span>
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
      {/* TODO about me düzenlenecek. Daha düzgün bir giriş yapılacak */}
      <p>{data.aboutMe}</p>
      <p className="mt-[3rem] text-sm font-thin italic leading-tight text-slate-400 dark:text-slate-500">
        You could use the left, and right arrow keys to navigate pages.
      </p>
    </div>
  );
}

export default Home;
