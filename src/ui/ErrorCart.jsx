import { BiError } from 'react-icons/bi';

// TODO: error cart düzgün durmuyor!
function ErrorCart({ message }) {
  return (
    <div className="readable-background border-color flex w-full flex-col items-center space-y-4 border p-4">
      <div className="flex items-center space-x-4">
        <BiError className="h-36 w-36 fill-amber-700" />
        <h1 className="text-[4rem] font-bold text-amber-700">Error</h1>
      </div>
      <div className="flex flex-col items-center space-y-2 text-[2rem]">
        <p>An error has occurred:</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ErrorCart;
