import { useGetData } from '../hooks/useGetData';
import Pagination from '../ui/Pagination';

import { BsCheckLg } from 'react-icons/bs';

function LanguageAndSkills() {
  const { isPending, isError, error, data } = useGetData('languageAndSkills');

  if (isPending) return 'loading...';

  if (isError) return <span>An error has occurred: {error.message}</span>;
  return (
    <>
      <div className="content-container w-[28rem] items-center">
        <h1 className="content-header">Foreign Language &amp; Skills</h1>

        <LanguageOrSkillsConten
          data={data.foreignLanguage}
          header={'Internship'}
        />

        <LanguageOrSkillsConten data={data.skills} header={'Skills'} />
      </div>

      <Pagination left={'mysampleprojects'} right={'achievements'} />
    </>
  );
}

function LanguageOrSkillsConten({ data, header }) {
  return (
    <div className="mb-12 flex flex-col justify-center">
      <h2 className="mb-4 self-center text-xl font-semibold">{header}</h2>
      <div className="readable-background w-full border border-slate-800 p-4">
        <ul className="flex flex-col space-y-3">
          {data.map((el) => (
            <li
              className="flex flex-row items-center justify-start"
              key={el.id}
            >
              <span className="flex flex-row items-center">
                <div className="min-w-5 min-h-5">
                  <BsCheckLg />
                </div>
                <div className="ml-2">
                  {el.language ? el.language : el.skill}
                </div>
              </span>
              {el.level && <span className="ml-2">{el.level}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageAndSkills;
