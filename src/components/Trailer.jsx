import React from "react";
import { IoMdClose } from "react-icons/io";
const Trailer = ({ trailer, play, setClose, setPlay, close }) => {
  return (
    <div
      className={`slider-container z-50 fixed top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-4/5 w-full  h-full  ${
        close && "scale-0 opacity-10 top-1/3"
      } shadow-lg shadow-black    ${
        play && "scale-120"
      }   transition-transform duration-1000 right-12`}
    >
      <button
        className=" text-white absolute  right-10 top-10 z-20 text-3xl"
        onClick={(e) => {
          setClose(true);
          setPlay(false);
        }}
      >
        {" "}
        {<IoMdClose />}
      </button>
      <iframe
      loading="lazy"
        title={trailer?.name}
        id="video"
        className="w-full h-96 rounded-xl "
        src={`https://www.youtube.com/embed/${trailer?.key}?rel=0&vq=hd360p60`}
        frameBorder="0"
      ></iframe>
      {/*                         <div className='absolute bg-black/80 w-full  h-full '></div>
       */}
    </div>
  );
};

export default Trailer;
