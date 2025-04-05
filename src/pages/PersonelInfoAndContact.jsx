import useGetData from '../hooks/useGetData';
import { getPageDictionary } from '../data/pageDictionary';
import { usePageLanguage } from '../context/PageLanguageContext';
import ShowDataContent from '../ui/ShowDataContent';

import { SiGithub, SiStackoverflow, SiLinkedin } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

function PersonelInfoAndContact() {
  const data = useGetData('personalInfo');

  return (
    <ShowDataContent
      data={data}
      fnRender={(item) => <PersonelInfoAndContactUi key={1} data={item} />}
    />
  );
}

function PersonelInfoAndContactUi({ data }) {
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('personalInfo', getPageLanguageName());

  return (
    <>
      <h1 className="page-header">
        {dictionary.header}
      </h1>

      <div className="content-data">
        <div className="readable-background border-color flex w-full flex-col space-y-1 border p-4">
          <div className="mb-2 flex flex-col sm:flex-row sm:flex-wrap sm:content-start sm:gap-[0.25rem]">
            <Info header={dictionary.address} data={data.address} />
            <Info header={dictionary.dateOfBirth} data={data.dateOfBirth} />
            <Info header={dictionary.gender} data={data.gender} />
            <Info header={dictionary.driveLicense} data={data.driverLicense} />
            <Info header={dictionary.email} data={data.email} />
          </div>

          <div className="flex flex-col space-y-2 pt-[3rem]">
            <div className="mb-[1.5rem] font-semibold underline decoration-slate-500 sm:text-center">
              {dictionary.socialMediaAddress}
            </div>

            <div className="flex flex-row flex-wrap items-center justify-around gap-3">
              <SocialMediaLink link={data.gitHub}>
                <SiGithub />
              </SocialMediaLink>
              <SocialMediaLink link={data.stackoverflow}>
                <SiStackoverflow />
              </SocialMediaLink>
              <SocialMediaLink link={data.linkedin}>
                <SiLinkedin />
              </SocialMediaLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Info({ header, data }) {
  return (
    <>
      <div className="mt-[1rem] flex flex-col space-y-1 sm:mr-[1rem] sm:w-[12rem] sm:text-center">
        <div className="font-semibold underline decoration-slate-500">
          {header}
        </div>
        <div className="leading-5">{data}</div>
      </div>
    </>
  );
}

// https://github.com/react-icons/react-icons#configuration
function SocialMediaLink({ link, children }) {
  const iconSize = '2.5rem';
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div
        className={`h-[${iconSize}] w-[${iconSize}] text-slate-800 dark:text-slate-300`}
      >
        <IconContext.Provider value={{ size: iconSize }}>
          {children}
        </IconContext.Provider>
      </div>
    </a>
  );
}

export default PersonelInfoAndContact;
