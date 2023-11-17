import { useScreenBreakpoints } from '../context/ScreenBreakpointsContext';

function ShowBreakPoints() {
  const { isSmScreen, isMdScreen, isLgScreen, isXgScreen, isXl2Screen } =
    useScreenBreakpoints();
  return (
    <div className="mt-3 font-bold">
      {!isSmScreen && <p>0 Smallest then 640px Screen</p>}
      {isSmScreen && <p>1 min 640px Small Screen</p>}
      {isMdScreen && <p>2 min 768px Medium Screen</p>}
      {isLgScreen && <p>3 min 1024px Large Screen</p>}
      {isXgScreen && <p>4 min 1280px X Large Screen</p>}
      {isXl2Screen && <p>5 min 1536px 2X Large Screen</p>}
    </div>
  );
}

export default ShowBreakPoints;
