import { useLocation } from 'react-router-dom';

import rootList from '../data/rootList';

function useRootInfo() {
  const location = useLocation();
  const endOfRootListIndex = rootList.length - 1;
  const rootIndexOfArray = rootList.findIndex(
    (el) => el.pathName === location.pathname.replace('/', ''),
  );
  return { endOfRootListIndex, rootIndexOfArray };
}

export default useRootInfo;
