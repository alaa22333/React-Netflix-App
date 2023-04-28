const CardSkeleton = () => {
 


  return (<section className="movies-section pb-32"> {[1, 2, 3, 3, 4, 4, 5, 5, 55, 4, 4, 3, 4, 2, 8, 2, 3, 3, 4, 4, 4].map(
    (_, i) => {
      return (
        <div
          key={i}
          className={`flex flex-col bg-black/30   w-auto  rounded-lg xl:w-56 h-70   p-7`}
        >
          <div className="rounded-lg border-0 w-50 skeleton h-60 "></div>

          <div className="flex mt-4  text-slate-400 flex-col justify-center items-start space-y-2  ">
            <div className="text-lg  skeleton skeleton-text line-clamp-none w-30 "></div>
            <div className="text-sm skeleton skeleton-text"></div>
            <button className=" skeleton-text skeleton  text-lg   px-5   transition   rounded-sm"></button>
          </div>
        </div>
      );
    }
  )}</section>)
};

export default CardSkeleton;
