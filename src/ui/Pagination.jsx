import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Pagination({ left, right }) {
  const navigate = useNavigate();

  const iconStyle =
    'h-10 w-10 transform fill-slate-400 transition hover:fill-slate-800 active:scale-75';

  if (!left & !right) return null;
  if (left === 'home') left = ' ';

  return (
    <div className="mt-auto flex w-full px-5">
      {left && (
        <button>
          <FaAngleLeft
            onClick={() => navigate(`/${left}`)}
            className={iconStyle}
          />
        </button>
      )}

      {right && (
        <button className="ml-auto">
          <FaAngleRight
            onClick={() => navigate(`/${right}`)}
            className={iconStyle}
          />
        </button>
      )}
    </div>
  );
}

export default Pagination;
