import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ['personalInfo'],
    queryFn: () =>
      axios.get('http://localhost:9000/person').then((res) => res.data),
  });

  if (isPending) return 'loading...';

  if (error) return 'An error has occurred:' + error.message;

  return (
    <>
      <div className="flex w-[28rem] flex-col items-center text-center">
        <h3 className="text-3xl">Hi!</h3>
        <h1 className="mt-5 text-4xl font-bold">
          My name is <span>{data.fullName}</span>
        </h1>
        <h2 className="text-xl">{data.occupation}</h2>
        <p className="mt-5 text-lg">
          This is my portfolio website where you can review my carrier and
          sample project
        </p>
        <img
          src="../main-page-user.jpg"
          alt="user navbar photo"
          className="mt-10 h-72 rounded-lg"
        />
      </div>
      <div className="mt-auto flex w-full justify-between px-5">
        <button>
          <FaAngleLeft className="h-10 w-10 fill-slate-400 transition-colors hover:fill-slate-800" />
        </button>
        <button>
          <FaAngleRight className="h-10 w-10 fill-slate-400 transition-colors hover:fill-slate-800" />
        </button>
      </div>
    </>
  );
}

export default Home;
