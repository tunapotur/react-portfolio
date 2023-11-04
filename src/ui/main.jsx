//TODO when project finish specify heropattern for reducing css size
function Main({ children }) {
  return (
    <main className="max-h-screen w-3/4 overflow-y-auto rounded-r-md border border-slate-800 bg-repeat heropattern-circuitboard-slate-200/90">
      <div>{children}</div>
    </main>
  );
}

export default Main;
