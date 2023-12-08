import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

import ShowDataContent from '../ui/ShowDataContent';
import PageControl from '../ui/PageControl';

import { BsCheckLg } from 'react-icons/bs';
import { usePageLanguage } from '../context/PageLanguageContext';
import { getPageDictionary } from '../data/pageDictionary';

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
    <PageControl>
      <LanguageAndSkillsUi props={{ skills, language }}></LanguageAndSkillsUi>
    </PageControl>
  );
}

function LanguageAndSkillsUi({ props }) {
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary(
    'languageAndSkills',
    getPageLanguageName(),
  );

  return (
    <>
      <h1 className="@apply mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
        {dictionary.header}
      </h1>
      <div className="content-narrow">
        <div className="mb-12 flex flex-col justify-center space-y-2">
          <h2 className="text-xl font-semibold">
            {dictionary.foreignLanguages}
          </h2>
          <ul className="readable-background border-color flex flex-col space-y-3 border p-4">
            <ShowDataContent
              data={props.language}
              fnRender={(item) => (
                <LanguageSkillCart key={item.id} data={item} />
              )}
            />
          </ul>
        </div>

        <div className="mb-12 flex flex-col justify-center space-y-2">
          <h2 className="text-xl font-semibold">{dictionary.skills}</h2>
          <ul className="readable-background border-color flex flex-col space-y-3 border p-4">
            <ShowDataContent
              data={props.skills}
              fnRender={(item) => (
                <LanguageSkillCart key={item.id} data={item} />
              )}
            />
          </ul>
        </div>
      </div>
    </>
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
