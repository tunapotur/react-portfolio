function CertificateAchievementCart({ data }) {
  return (
    <div className="readable-background flex flex-col space-y-1 border border-slate-800 p-4">
      <div className={'flex flex-row justify-between space-x-2'}>
        <h3 className="font-semibold">{data.header}</h3>
        <div className="text-right text-sm">{data.date}</div>
      </div>

      <div className="text-justify">{data.explanation}</div>
    </div>
  );
}

export default CertificateAchievementCart;
