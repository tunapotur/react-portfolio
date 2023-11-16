// import { ImSpinner2 } from 'react-icons/im';

function Loader() {
  // return <ImSpinner2 className="h-24 w-24 animate-spin fill-amber-600/40" />;

  return (
    <div className="flex flex-col items-center gap-[1rem] text-[1.4rem] italic text-slate-600/75 dark:text-slate-400/75">
      <div className="loader-dots"></div>
      <p>Loading content...</p>
    </div>
  );
}

export default Loader;
