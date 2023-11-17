function CertificateAchievementCart({ data }) {
  return (
    <div className="readable-background border-color flex w-full flex-col space-y-1 border px-3 py-2 leading-tight sm:space-y-2 sm:px-4 sm:py-3 sm:leading-normal">
      <div
        className={
          'flex flex-col justify-start space-x-0 sm:flex-row sm:justify-between sm:space-x-2'
        }
      >
        <h3 className="font-semibold">{data.header}</h3>
        <div className="text-left text-sm sm:text-right">{data.date}</div>
      </div>

      <div className="text-left leading-snug sm:text-justify sm:leading-normal">
        {data.explanation}
      </div>
    </div>
  );
}

export default CertificateAchievementCart;
