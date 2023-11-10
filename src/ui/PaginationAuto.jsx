import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import rootList from '../data/rootList';

function Pagination() {
  const location = useLocation();
  const endOfRootListIndex = rootList.length - 1;
  const rootIndexOfArray = rootList.findIndex(
    (el) => el.path === location.pathname,
  );

  const iconStyle =
    'h-10 w-10 transform fill-slate-400 transition hover:fill-slate-800 active:scale-75';

  return (
    <div className="mt-auto flex w-full pt-10">
      {(rootIndexOfArray === endOfRootListIndex ||
        (rootIndexOfArray > 0 && rootIndexOfArray)) && (
        <Link to={rootList[rootIndexOfArray - 1].path}>
          <FaAngleLeft className={iconStyle} />
        </Link>
      )}

      {(rootIndexOfArray === 0 || rootIndexOfArray < endOfRootListIndex) && (
        <Link to={rootList[rootIndexOfArray + 1].path} className="ml-auto">
          <FaAngleRight className={iconStyle} />
        </Link>
      )}
    </div>
  );
}

export default Pagination;
