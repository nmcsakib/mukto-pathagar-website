const Counter = () => {

  return (
    <section className="container mx-auto p-8 my-5">

      <div className="flexcode-container">
        <div className="rounded-xl py-16 px-5 md:px-0 text-center border-gray-500 transition-all duration-300 hover:border-[#fc8787f3] border-2  grid gap-8 md:gap-0 md:grid-cols-3 justify-center text-stone-400 divide-y-2 md:divide-y-0 divide-x-0 md:divide-x-2 hover:divide-[#fc8787f3] divide-gray-500 group">
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center">
            <h2 className="text-5xl md:text-7xl flex items-center gap-5 font-bold">
              500
              <span className="-ml-4 group-hover:text-[#fc8787f3] duration-300">
                {" "}
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider">Members.</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
            <h2 className="text-5xl flex items-center gap-5 md:text-7xl font-bold">
              500
              <span className="-ml-4 group-hover:text-[#fc8787f3] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider">
              Total Books.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
            <h2 className="text-5xl flex items-center gap-5 md:text-7xl font-bold">
              500
              <span className="-ml-4 group-hover:text-[#fc8787f3] duration-300">
                &#43;
              </span>
            </h2>
            <p className="text-lg tracking-wider">Total Awards.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Counter;