import { BiError } from 'react-icons/bi';

function ErrorCart({ message }) {
  return (
    <div className="readable-background border-color flex w-full flex-col items-center border p-4 text-center">
      <BiError className="h-36 w-36 fill-amber-700" />
      <h1 className="text-[3rem] font-bold leading-none text-amber-700">
        Error
      </h1>
      <p className="mt-[1rem] text-[1.5rem] font-bold">An error has occurred</p>
      <p className="text-[1.5rem]">{message}</p>
    </div>
  );
}

export default ErrorCart;
