import PaginationAuto from './PaginationAuto';
import ErrorCart from '../ui/ErrorCart';
import Loader from './Loader';
import { useState } from 'react';

function PageUi({ isPending, isError, error, pageHeader, children }) {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  function checkDirection() {
    if (touchEndX < touchStartX) console.log('swiped left!');
    if (touchEndX > touchStartX) console.log('swiped right!');
  }

  function handleTouchStart(e) {
    setTouchStartX(e.changedTouches[0].screenX);
    // console.log('onTouchStart: ', touchStartX
    console.log(e.touches);
  }

  function handleTouchEnd(e) {
    setTouchEndX(e.changedTouches[0].screenX);
    checkDirection();
    // console.log('onTouchEnd: ', touchEndX);
  }

  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex h-full w-full flex-col items-center bg-orange-600 px-4 pt-6 sm:px-12 md:w-[48rem]"
      >
        {pageHeader && (
          <h1 className="@apply mb-6 text-xl font-semibold sm:mb-10 sm:text-2xl">
            {pageHeader}
          </h1>
        )}

        {isPending && (
          <div className={'error-loader'}>
            <Loader />
          </div>
        )}

        {isError && (
          <div className={'error-loader'}>
            <ErrorCart message={error.message} />
          </div>
        )}

        {!isPending && !isError && (
          <>
            {children}

            <PaginationAuto />
          </>
        )}
      </div>
    </>
  );
}

export default PageUi;
