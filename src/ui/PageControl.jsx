import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRootInfo from '../hooks/useRootInfo';
import PaginationAuto from './PaginationAuto';

function PageControl({ children }) {
  // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);
  const navigate = useNavigate();
  const { beforeRoot: leftMove, nextRoot: rightMove } = useRootInfo();

  function navRoot(path) {
    if (!path) return;
    navigate('/' + path);
  }

  function handleTouchStart(e) {
    setXDown(e.touches[0].clientX);
    setYDown(e.touches[0].clientY);
  }

  function handleTouchMove(e) {
    if (!xDown || !yDown) return;

    const xUp = e.touches[0].clientX;
    const yUp = e.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
        // console.log('right swipe: ', xDiff);
        navRoot(rightMove.pathName);
      } else {
        /* left swipe */
        // console.log('left swipe: ', xDiff);
        navRoot(leftMove.pathName);
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    setXDown(null);
    setYDown(null);
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="flex h-full w-full flex-col items-center px-4 pt-6 sm:px-12 md:w-[48rem]"
    >
      {children}

      <PaginationAuto />
    </div>
  );
}

export default PageControl;
