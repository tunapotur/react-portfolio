//TODO when project finish specify heropattern for reducing css size
function Main({ children }) {
  return (
    <main className="flex max-h-screen w-3/4 flex-col items-center overflow-y-auto rounded-r-md border border-slate-800 bg-repeat px-6 pb-10 pt-24 heropattern-circuitboard-slate-200/50">
      {children}
    </main>
  );
}

export default Main;
