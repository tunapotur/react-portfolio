import { ImSpinner2 } from 'react-icons/im';

function LoaderSmallSpinner() {
  return (
    <div>
      <ImSpinner2 className="h-[1.5rem] w-[1.5rem] animate-spin fill-amber-600/60 dark:fill-amber-400/60" />
    </div>
  );
}

export default LoaderSmallSpinner;
