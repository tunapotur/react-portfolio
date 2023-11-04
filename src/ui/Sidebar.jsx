import { BsDownload } from 'react-icons/bs';
import PageNavigations from './pageNavigations';

function Sidebar() {
  return (
    <nav className="flex h-full max-h-screen w-1/4 flex-grow flex-col items-center overflow-y-auto rounded-l-md border-y border-l border-slate-800 bg-slate-200 px-5 pb-1 pt-5 text-center">
      <img
        src="../navbar-user-image.jpg"
        alt="user navbar photo"
        className="mt-10 h-36 rounded-full"
      />

      <h3 className="mb-2 mt-3 font-nunito text-3xl font-semibold leading-7">
        Ahmet Tuna Potur
      </h3>

      <h2 className="mb-10 font-open_sans font-medium">
        ICT Teacher &amp; Engineer
      </h2>

      <PageNavigations />

      <div className="mb-2 mt-auto text-xs text-slate-600">
        <div className="mb-2 flex items-center justify-around border-[1px] border-slate-400 px-3 py-2">
          <span className="pr-2">Download CV</span>
          <BsDownload />
        </div>

        <div className="italic leading-3">
          <p>Ahmet Tuna Potur</p>
          <p>tunapotur@yahoo.com</p>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
