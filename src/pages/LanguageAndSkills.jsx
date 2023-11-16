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
    <div className="content-data-28rem">
      <LanguageOrSkillsConten
        data={data.foreignLanguage}
        header={'Foreign Languages'}
      />

      <LanguageOrSkillsConten data={data.skills} header={'Skills'} />
    </div>
  );
}

// TODO noktalar ve yazı aynı çizgide değil
function LanguageOrSkillsConten({ data, header }) {
  return (
    <div className="mb-12 flex flex-col justify-center">
      <h2 className="mb-4 self-center text-xl font-semibold">{header}</h2>
      <div className="readable-background border-color w-full border p-4">
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
