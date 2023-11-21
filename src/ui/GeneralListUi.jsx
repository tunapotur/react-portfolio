import { useState } from 'react';
import { PAGE_SIZE } from '../data/constants';

function CertificateAchievementUi({ data, render }) {
  const itemCount = data.length;
  const [page, setPage] = useState(1);
  const maxPageCount = Math.ceil(itemCount / PAGE_SIZE) * PAGE_SIZE;
  const hiddenItemsCount = itemCount - PAGE_SIZE * page;

  if (itemCount <= PAGE_SIZE)
    return <div className="content-data">{data.map(render)}</div>;

  return (
    <>
      <div className="content-data">
        {data.slice(0, PAGE_SIZE * page).map(render)}
      </div>
      {PAGE_SIZE * page < maxPageCount && (
        <button
          className="link mt-16"
          onClick={() => setPage((p) => (p = p + 1))}
        >
          {`There are ${hiddenItemsCount} more. Show ${
            hiddenItemsCount >= PAGE_SIZE ? PAGE_SIZE : hiddenItemsCount
          } more...`}
        </button>
      )}
    </>
  );
}

export default CertificateAchievementUi;
