import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Pagination({ left, right }) {
  if (!left & !right) return null;

  const iconStyle =
    'h-10 w-10 transform fill-slate-400 transition hover:fill-slate-800 active:scale-75';

  return (
    <div className="mt-auto flex w-full px-5">
      {left && (
        <Link to={`/${left}`}>
          <FaAngleLeft className={iconStyle} />
        </Link>
      )}

      {right && (
        <Link to={`/${right}`} className="ml-auto">
          <FaAngleRight className={iconStyle} />
        </Link>
      )}
    </div>
  );
}

export default Pagination;
