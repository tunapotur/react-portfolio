import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

import PaginationAuto from '../ui/PaginationAuto';
import ShowDataContent from '../ui/ShowDataContent';

import { BsCheckLg } from 'react-icons/bs';

function LanguageAndSkills() {
  const [skills, language] = useQueries({
    queries: [
      {
        queryKey: ['skills'],
        queryFn: () =>
          axios
            .get(`${import.meta.env.VITE_DB}/${'skills'}`)
            .then((res) => res.data),
      },
      {
        queryKey: ['language'],
        queryFn: () =>
          axios
            .get(`${import.meta.env.VITE_DB}/${'language'}`)
            .then((res) => res.data),
      },
    ],
  });
  return (
    <div className="flex h-full flex-col items-center px-4 pt-6 sm:px-12 md:w-[48rem]">
      <h1 className="@apply mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        Foreign Languages & Skills
      </h1>
      <div className="content-narrow">
        <div className="mb-12 flex flex-col justify-center space-y-2">
          <h2 className="text-xl font-semibold">Foreign Languages</h2>
          <ul className="readable-background border-color flex flex-col space-y-3 border p-4">
            <ShowDataContent
              data={language}
              fnRender={(item) => (
                <LanguageSkillCart key={item.id} data={item} />
              )}
              fnFilter={(item) => item.language === 'en'}
            />
          </ul>
        </div>

        <div className="mb-12 flex flex-col justify-center space-y-2">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="readable-background border-color flex flex-col space-y-3 border p-4">
            <ShowDataContent
              data={skills}
              fnRender={(item) => (
                <LanguageSkillCart key={item.id} data={item} />
              )}
              fnFilter={(item) => item.language === 'en'}
            />
          </ul>
        </div>
      </div>
      <PaginationAuto />
    </div>
  );
}

function LanguageSkillCart({ data }) {
  return (
    <li
      className="flex flex-row items-center text-left leading-tight"
      key={data.id}
    >
      <div className="min-w-5 min-h-5 mr-1">
        <BsCheckLg />
      </div>
      <div>{data.explanation}</div>
      {data.level && <span className="ml-auto">{data.level}</span>}
    </li>
  );
}

export default LanguageAndSkills;
