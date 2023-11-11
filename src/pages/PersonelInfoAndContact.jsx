import useGetData from '../hooks/useGetData';
import PageUi from '../ui/PageUi';

function PersonelInfoAndContact() {
  const { isPending, isError, error, data } = useGetData('person');

  return (
    <PageUi
      isPending={isPending}
      isError={isError}
      error={error}
      pageHeader={'Personal Information & Contact'}
    >
      <PersonelInfoAndContactUi data={data} />
    </PageUi>
  );
}

function PersonelInfoAndContactUi({ data }) {
  return (
    <div className="content-data">
      <div className="readable-background flex flex-col space-y-1 border border-slate-800 p-4">
        <div className="mb-5 flex flex-col space-y-3">
          <div className="flex flex-row">
            <div className="w-1/3 font-semibold">Address</div>
            <div className="w-2/3">{data.address}</div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/3 font-semibold">Date of Birth</div>
            <div className="w-2/3">{data.dateOfBirth}</div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/3 font-semibold">Gender</div>
            <div className="w-2/3">{data.gender}</div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/3 font-semibold">Drive License</div>
            <div className="w-2/3">{data.driveLicense}</div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="font-semibold underline decoration-slate-800">
            Social Media Address
          </div>
          <a href={data.github} rel="noopener noreferrer" target="_blank">
            {data.github}
          </a>
          <a
            href={data.stackoverflow}
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.stackoverflow}
          </a>
          <a href={data.linkedin} rel="noopener noreferrer" target="_blank">
            {data.linkedin}
          </a>
          <a href={data.twitter} rel="noopener noreferrer" target="_blank">
            {data.twitter}
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonelInfoAndContact;
