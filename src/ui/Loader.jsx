// import { ImSpinner2 } from 'react-icons/im';

function Loader() {
  // return <ImSpinner2 className="h-24 w-24 animate-spin fill-amber-600/40" />;

  return (
    <div className="loader-dots-container">
      <div className="loader-dots"></div>
      <p>Loading content...</p>
    </div>
  );
}

export default Loader;
