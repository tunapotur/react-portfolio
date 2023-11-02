import { BsDownload } from 'react-icons/bs';

function App() {
  //TODO when project finish specify heropattern for reducing css size
  return (
    <div className="mx-auto flex h-screen w-[64rem] flex-row py-5">
      <nav className="flex h-full max-h-screen w-1/4 flex-grow flex-col items-center overflow-y-auto rounded-l-md border-y border-l border-slate-800 bg-slate-200 px-5 pb-1 pt-5 text-center">
        <img
          src="../navbar-user-image.jpg"
          alt="user navbar photo"
          className="mt-10 h-36 rounded-full"
        />
        <h3 className="font-nunito mb-2 mt-3 text-3xl font-semibold leading-7">
          Ahmet Tuna Potur
        </h3>
        <h2 className="font-open_sans mb-10 font-medium">
          ICT Teacher &amp; Engineer
        </h2>

        <ul className="leading-5">
          <li className="mb-4 text-lg font-semibold leading-5 text-amber-700">
            Home
          </li>
          <li className="mb-4">About</li>
          <li className="mb-4">Education</li>
          <li className="mb-4">Work Experience</li>
          <li className="mb-4">My Sample Projects</li>
          <li className="mb-4">Foreign Language &amp; Skills</li>
          <li className="mb-4">Achievements</li>
          <li className="mb-4">Certificates</li>
          <li className="mb-4">Udemy Certificates</li>
          <li className="mb-4">References</li>
          <li className="mb-4">Personal Information &amp; Contact</li>
        </ul>

        <div className="mb-2 mt-auto text-xs text-slate-600">
          <div className="mb-2 flex items-center border-[1px] border-slate-400 px-3 py-2">
            <span className="pr-2">Download CV</span>
            <BsDownload />
          </div>

          <div className="italic leading-3">
            <p>Ahmet Tuna Potur</p>
            <p>tunapotur@yahoo.com</p>
          </div>
        </div>
      </nav>
      <main className="max-h-screen w-3/4 overflow-y-auto rounded-r-md border border-slate-800 bg-repeat heropattern-circuitboard-slate-200/90"></main>
    </div>
  );
}

export default App;

/**
 * 1rem=16px
 *
 * font-family: 'Montserrat', sans-serif;
 * font-family: 'Nunito Sans', sans-serif;
 * font-family: 'Open Sans', sans-serif;
 */
