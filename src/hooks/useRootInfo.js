import { useLocation } from 'react-router-dom';

import { rootList } from '../data/rootList';

function useRootInfo() {
  const location = useLocation();
  const endOfRootListIndex = rootList.length - 1;
  const rootIndexOfArray = rootList.findIndex(
    (el) => el.pathName === location.pathname.replace('/', ''),
  );

  const beforeRoot =
    rootIndexOfArray === endOfRootListIndex || rootIndexOfArray > 0
      ? rootList[rootIndexOfArray - 1]
      : '';

  const nextRoot =
    rootIndexOfArray === 0 || rootIndexOfArray < endOfRootListIndex
      ? rootList[rootIndexOfArray + 1]
      : '';

  return { endOfRootListIndex, rootIndexOfArray, beforeRoot, nextRoot };
}

export default useRootInfo;
