import { useNavigate } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';
import SpeechBubble from '../ui/SpeechBubble';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="bg-heropattern flex h-screen w-screen items-center justify-center">
      <div className="flex h-fit items-center">
        <div className="flex flex-col items-center">
          <div className="text-[8rem] font-bold italic tracking-tighter text-slate-700 dark:text-slate-400">
            Oops!
          </div>

          <h1 className="mt-13 mb-10 max-w-[32rem] font-nunito text-3xl leading-tight">
            The page you are looking for could not be found.
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="flex w-fit items-center space-x-2 border-2 border-slate-800 px-6 py-2 text-xl font-semibold transition hover:border-amber-700 hover:text-amber-700 active:-translate-x-0.5 active:scale-95 dark:border-slate-400 dark:hover:border-amber-800 dark:hover:text-amber-800"
          >
            <BsArrowLeft className="h-6 w-6" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="relative">
          <SpeechBubble
            speek={
              'Why did you wake me up? I need to sleep. Please click the go back button.'
            }
          />
          <img
            className="image-dark h-[32rem] drop-shadow-md"
            src="../behlul.png"
            alt="page not found"
          />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;