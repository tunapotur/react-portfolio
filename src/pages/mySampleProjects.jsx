import { useGetData } from '../hooks/useGetData';
import Pagination from '../ui/Pagination';

import { FaLink } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { IoLibrary } from 'react-icons/io5';

function MySampleProjects() {
  const { isPending, isError, error, data } = useGetData('mySampleProjects');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <div className="content-container w-full">
        <h1 className="content-header">My Sample Projects</h1>
        <div className="flex w-full flex-col space-y-7">
          {data.map((el) => (
            <SampleProjectCart key={el.id} data={el} />
          ))}
        </div>
      </div>
      <Pagination left={'workexperience'} right={'languageandskills'} />
    </>
  );
}

function SampleProjectCart({ data }) {
  const iconSize = 'h-7 w-7';

  return (
    <div className="readable-background flex flex-row space-x-4 border border-slate-800 p-4">
      <div className={'flex w-11/12 flex-col space-y-2  text-justify'}>
        <h2 className="font-semibold">{data.header}</h2>
        <div>{data.explanation}</div>
      </div>

      <div className={'flex w-1/12 flex-col items-center justify-around'}>
        <IconLink href={data.www}>
          <FaLink className={iconSize} />
        </IconLink>

        <IconLink href={data.github}>
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
