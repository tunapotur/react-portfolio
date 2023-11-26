import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';
import { IconContext } from 'react-icons';

import { SiGithub, SiStackoverflow, SiLinkedin } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

function PersonelInfoAndContact() {
  const { isPending, isError, error, data } = useGetData('personalInfo');
  const filteredData = data?.filter((item) => item.language === 'en')[0];

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Personal Information & Contact'}
    >
      <PersonelInfoAndContactUi data={filteredData} />
    </PageUi>
  );
}

function PersonelInfoAndContactUi({ data }) {
  return (
    <div className="content-data">
      <div className="readable-background border-color flex flex-col space-y-1 border p-4">
        <div className="mb-2 flex flex-col space-y-3">
          <Info header={'Address'} data={data.address} />
          <Info header={'Date of Birth'} data={data.dateOfBirth} />
          <Info header={'Gender'} data={data.gender} />
          <Info header={'Drive License'} data={data.driverLicense} />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="mb-4 font-semibold underline decoration-slate-800">
            Social Media Address
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
            <SocialMediaLink link={data.twitter}>
              <FaXTwitter />
            </SocialMediaLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ header, data }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="font-semibold">{header}</div>
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
