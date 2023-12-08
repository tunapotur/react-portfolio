import { usePageLanguage } from '../context/PageLanguageContext';
import useGetData from '../hooks/useGetData';

import ShowDataContent from '../ui/ShowDataContent';

import { getPageDictionary } from '../data/pageDictionary';

function Home() {
  const data = useGetData('personalInfo');

  return (
    <ShowDataContent
      data={data}
      fnRender={(item) => <HomeUi key={1} data={item} />}
    />
  );
}

function HomeUi({ data }) {
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('home', getPageLanguageName());

  return (
    <div className="content-narrow">
      <h3 className="text-3xl">{dictionary.hi}</h3>
      <h1 className="mt-1 text-2xl font-bold sm:text-4xl">
        {dictionary.iam} <span>{data.name}</span>
      </h1>
      <h2 className="text-lg sm:text-xl">{data.occupation}</h2>

      <img
        src="../main-page-user.jpg"
        alt="user navbar photo"
        className="image-dark mt-5 h-72 rounded-md"
      />

      <p className="readable-background mt-8 text-justify font-open_sans text-base leading-6">
        {data.aboutMe}
      </p>

      <p className="readable-background mt-3 text-justify font-open_sans text-sm leading-6">
        {dictionary.definition}
      </p>

      <p className="mt-[3rem] hidden text-justify text-sm font-thin italic leading-tight text-slate-500 dark:text-slate-400 sm:block">
        {dictionary.pageUsage}
      </p>
    </div>
  );
}

export default Home;
