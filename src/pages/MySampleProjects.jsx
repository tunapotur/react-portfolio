import PageUi from '../ui/PageUi';
import useGetData from '../hooks/useGetData';

import { FaLink } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { IoLibrary } from 'react-icons/io5';

function MySampleProjects() {
  const { isPending, isError, error, data } = useGetData('mySampleProjects');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'My Sample Projects'}
    >
      <MySampleProjectsUi data={data} />
    </PageUi>
  );
}

function MySampleProjectsUi({ data }) {
  return (
    <div className="flex w-full flex-col space-y-7">
      {data.map((el) => (
        <SampleProjectCart key={el.id} data={el} />
      ))}
    </div>
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
