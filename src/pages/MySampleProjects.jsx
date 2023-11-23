import PageUi from '../ui/PageUi';
import useGetData from '../hooks/useGetData';
import GeneralListUi from '../ui/GeneralListUi';

import { FaLink } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { IoLibrary } from 'react-icons/io5';

function MySampleProjects() {
  const { isPending, isError, error, data } = useGetData('sampleProjects');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'My Sample Projects'}
    >
      <GeneralListUi
        data={data?.filter((item) => item.language === 'en')}
        render={(project) => (
          <SampleProjectCart key={project.id} data={project} />
        )}
      />
    </PageUi>
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
        className={'flex w-2/12 flex-col items-center justify-around sm:w-1/12'}
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
