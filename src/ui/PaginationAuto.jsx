import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

import useRootInfo from '../hooks/useRootInfo';
import { useKey } from '../hooks/useKey';

function Pagination() {
  const { beforeRoot: leftMove, nextRoot: rightMove } = useRootInfo();
  const navigate = useNavigate();

  const iconStyle =
    'h-10 w-10 transform fill-slate-600/40 transition hover:fill-slate-800 active:scale-75 dark:fill-slate-400/40 dark:hover:fill-slate-300';

  function keyNav(path) {
    if (!path) return;
    navigate('/' + path);
  }

  useKey('ArrowLeft', () => keyNav(leftMove.pathName));
  useKey('ArrowRight', () => keyNav(rightMove.pathName));

  return (
    <div className="mt-auto flex w-full pb-5 pt-10">
      {leftMove && (
        <Link to={'/' + leftMove.pathName}>
          <FaAngleLeft className={iconStyle} />
        </Link>
      )}

      {rightMove && (
        <Link to={'/' + rightMove.pathName} className="ml-auto">
          <FaAngleRight className={iconStyle} />
        </Link>
      )}
    </div>
  );
}

export default Pagination;
