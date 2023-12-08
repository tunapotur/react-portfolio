import useGetData from '../hooks/useGetData';
import { FaLink } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { IoLibrary } from 'react-icons/io5';
import PageControl from '../ui/PageControl';
import { getPageDictionary } from '../data/pageDictionary';
import { usePageLanguage } from '../context/PageLanguageContext';
import ShowDataContent from '../ui/ShowDataContent';

function MySampleProjects() {
  const data = useGetData('mySampleProjects');
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary(
    'mySampleProjects',
    getPageLanguageName(),
  );

  return (
    <PageControl>
      <MySampleProjectsUi data={data} dictionary={dictionary} />
    </PageControl>
  );
}

function MySampleProjectsUi({ data, dictionary }) {
  return (
    <>
      <h1 className="mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        {dictionary.header}
      </h1>

      <div className="content-data">
        <ShowDataContent
          data={data}
          fnRender={(item) => <SampleProjectCart key={item.id} data={item} />}
        />
      </div>
    </>
  );
}

function SampleProjectCart({ data }) {
  const iconSize = 'h-7 w-7';

  return (
    <div className="readable-background border-color flex flex-row space-x-4 border p-4">
      <div
        className={'flex w-10/12 flex-col space-y-2 text-justify  sm:w-11/12'}
      >
        <h2 className="text-left font-semibold">{data.name}</h2>
        <div className="">{data.explanation}</div>
      </div>

      <div
        className={
          'flex w-2/12 flex-col items-center justify-around sm:w-1/12 sm:space-y-5'
        }
      >
        <IconLink href={data.webPage}>
          <FaLink className={iconSize} />
        </IconLink>

        <IconLink href={data.gitHub}>
          <SiGithub className={iconSize} />
        </IconLink>

        <IconLink href={data.lib}>
          <IoLibrary className={iconSize} />
        </IconLink>
      </div>
    </div>
  );
}

function IconLink({ href, children }) {
  if (href)
    return (
      <a href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
}

export default MySampleProjects;
