import { useNavigate } from 'react-router-dom';

import { BsArrowLeft } from 'react-icons/bs';
import SpeechBubble from '../ui/SpeechBubble';
import { usePageLanguage } from '../context/PageLanguageContext';
import { getPageDictionary } from '../data/pageDictionary';

// TODO bu sayfanın da çevirisi yapılacak
function PageNotFound() {
  const navigate = useNavigate();
  const { getPageLanguageName } = usePageLanguage();
  const dictionary = getPageDictionary('pageNotFound', getPageLanguageName());
  return (
    <div className="bg-heropattern flex h-screen w-screen items-center justify-center p-10">
      <div className="mt-[4rem] flex h-fit flex-col items-center sm:mt-[6rem]">
        <div className="relative">
          <SpeechBubble
            speek={
              'Why did you wake me up? I need to sleep. Please click the go back button.'
            }
          />
          <img
            className="image-dark h-[20rem] drop-shadow-md sm:h-[30rem]"
            src="../behlul.png"
            alt="page not found"
          />
        </div>

        <div className="mt-2 flex flex-col items-center space-y-3 sm:space-y-6">
          <div className="text-[3rem] font-bold italic leading-none tracking-tighter text-slate-700 dark:text-slate-400 sm:text-[5rem]">
            Oops!
          </div>

          <h1 className="font-nunito text-lg leading-tight">
            The page you are looking for could not be found.
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="flex w-fit items-center space-x-2 border-2 border-slate-800 px-4 py-2 text-xl font-semibold transition hover:border-amber-700 hover:text-amber-700 active:-translate-x-0.5 active:scale-95 dark:border-slate-400 dark:hover:border-amber-800 dark:hover:text-amber-800"
          >
            <BsArrowLeft className="h-6 w-6" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
