import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import rootList from '../data/rootList';
import useRootInfo from '../hooks/useRootInfo';
// import { useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';

function Pagination() {
  const { rootIndexOfArray, endOfRootListIndex } = useRootInfo();
  // const queryClient = useQueryClient();

  const iconStyle =
    'h-10 w-10 transform fill-slate-600/40 transition hover:fill-slate-800 active:scale-75';

  const leftMove =
    rootIndexOfArray === endOfRootListIndex || rootIndexOfArray > 0
      ? rootList[rootIndexOfArray - 1]
      : '';

  const rightMove =
    rootIndexOfArray === 0 || rootIndexOfArray < endOfRootListIndex
      ? rootList[rootIndexOfArray + 1]
      : '';

  // *PRE-FETCHING SAMPLE
  /* if (rightMove)
    queryClient.prefetchQuery({
      queryKey: [rightMove.sourceName],
      queryFn: () =>
        axios
          .get(`${import.meta.env.VITE_DB}/${rightMove.sourceName}`)
          .then((res) => res.data),
    }); */

  return (
    <div className="mt-auto flex w-full pt-10">
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
