import { BsDownload } from 'react-icons/bs';

function App() {
  //TODO when project finish specify heropattern for reducing css size
  return (
    <div className="relative mx-auto flex min-h-screen w-[64rem] ">
      <nav className="flex w-[16rem] flex-col items-center bg-slate-200">
        <img
          src="../navbar-user-image.jpg"
          alt="user navbar photo"
          className="mt-10 h-36 rounded-full"
        />
        <h3>Ahmet Tuna Potur</h3>
        <h2>ICT Teacher &amp; Engineer</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Work Experience</li>
          <li>My Sample Projects</li>
          <li>Foreign Language &amp; Skills</li>
          <li>Achievements</li>
          <li>Certificates</li>
          <li>Udemy Certificates</li>
          <li>References</li>
          <li>Personal Information &amp; Contact</li>
        </ul>

        <div className="flex items-center border border-slate-800 px-3 py-2">
          <span className="pr-2">Download CV</span>
          <BsDownload />
        </div>

        <p>Ahmet Tuna Potur</p>
        <p>tunapotur@yahoo.com</p>
      </nav>
      <main className="w-[48rem] bg-repeat heropattern-circuitboard-slate-100/90"></main>
    </div>
  );
}

export default App;

/**
 * 1rem=16px
 */
