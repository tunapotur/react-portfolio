import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';
import Loader from './Loader';

import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  const style = 'flex h-[50%] flex-col items-center justify-center';

  const { isSmScreen, isMdScreen, isLgScreen, isXgScreen, isXl2Screen } =
    useScreenBreakpoints();

  return (
    <>
      <div
        className={`flex h-full flex-col items-center bg-red-300 px-12 pt-12 ${
          isMdScreen ? 'w-[48rem]' : 'px-4'
        }`}
      >
        {pageHeader && (
          <h1 className="@apply mb-16 text-2xl font-semibold">{pageHeader}</h1>
        )}

        {isPending && (
          <div className={style}>
            <Loader />
          </div>
        )}

        {isError && (
          <div className={style}>
            <ErrorCart message={error.message} />
          </div>
        )}

        {!isPending && !isError && (
          <>
            {children}

            <div className="mt-3 font-bold">
              {!isSmScreen && <p>0 Smallest then 640px Screen</p>}
              {isSmScreen && <p>1 min 640px Small Screen</p>}
              {isMdScreen && <p>2 min 768px Medium Screen</p>}
              {isLgScreen && <p>3 min 1024px Large Screen</p>}
              {isXgScreen && <p>4 min 1280px X Large Screen</p>}
              {isXl2Screen && <p>5min 1536px 2X Large Screen</p>}
            </div>

            <div className="relative mt-5 h-[8rem] w-[20rem] overflow-hidden bg-red-800">
              <div className="absolute left-0 top-0 z-10 w-[16rem] -translate-x-[50%] bg-yellow-500"></div>{' '}
              <div className="absolute start-0 top-0 z-0 h-[6rem] w-[18rem] bg-black"></div>
            </div>
            <PaginationAuto />
          </>
        )}
      </div>
    </>
  );
}
export default PageUi;
