import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

import { BsCheckLg } from 'react-icons/bs';

function LanguageAndSkills() {
  const { isPending, isError, error, data } = useGetData('languageAndSkills');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Foreign Languages & Skills'}
    >
      <LanguageAndSkillsUi data={data} />
    </PageUi>
  );
}

function LanguageAndSkillsUi({ data }) {
  return (
    <div className="content-narrow">
      <LanguageOrSkillsConten
        data={data.foreignLanguage}
        header={'Foreign Languages'}
      />

      <LanguageOrSkillsConten data={data.skills} header={'Skills'} />
    </div>
  );
}

function LanguageOrSkillsConten({ data, header }) {
  return (
    <div className="mb-12 flex flex-col justify-center space-y-4">
      <h2 className="text-xl font-semibold">{header}</h2>
      <ul className="readable-background border-color flex flex-col space-y-3 border p-4">
        {data.map((el) => (
          <li
            className="flex flex-row items-center text-left leading-tight"
            key={el.id}
          >
            <div className="min-w-5 min-h-5 mr-1">
              <BsCheckLg />
            </div>
            <div>{el.language ? el.language : el.skill}</div>
            {el.level && <span className="ml-auto">{el.level}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageAndSkills;
