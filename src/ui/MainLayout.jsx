function Main({ children }) {
  return (
    <main className="border-color bg-heropattern flex max-h-screen w-3/4 flex-col items-center overflow-y-auto rounded-r-md border bg-repeat px-12 pb-10 pt-24">
      {children}
    </main>
  );
}

export default Main;
