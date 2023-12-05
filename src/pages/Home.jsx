import useGetData from '../hooks/useGetData';

import ShowDataContent from '../ui/ShowDataContent';
import PageControl from '../ui/PageControl';

function Home() {
  const data = useGetData('personalInfo');

  return (
    <PageControl>
      <ShowDataContent
        data={data}
        fnRender={(item) => <HomeUi key={1} data={item} />}
      ></ShowDataContent>
    </PageControl>
  );
}

function HomeUi({ data }) {
  return (
    <div className="content-narrow">
      <h3 className="text-3xl">Hi!</h3>
      <h1 className="mt-1 text-2xl font-bold sm:text-4xl">
        I Am <span>{data.name}</span>
      </h1>
      <h2 className="text-lg sm:text-xl">{data.occupation}</h2>

      <img
        src="../main-page-user.jpg"
        alt="user navbar photo"
        className="image-dark mt-5 h-72 rounded-md"
      />

      <p className="readable-background mt-8 text-left font-open_sans text-base leading-6">
        {data.aboutMe}
      </p>

      <p className="readable-background mt-3 text-left font-open_sans text-base leading-6">
        This is my portfolio website where you can review my carrier and sample
        project
      </p>

      <p className="mt-[3rem] hidden text-sm font-thin italic leading-tight text-slate-500 dark:text-slate-400 sm:block">
        You could use the left, and right arrow keys to navigate pages.
      </p>
    </div>
  );
}

export default Home;
