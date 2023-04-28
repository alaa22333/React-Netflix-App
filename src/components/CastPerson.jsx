import React from "react";
import { imgUrl } from "../utilis/lists";
import img from "../assets/icon-1633249_640.png";
const CastPerson = ({ character, profile_path, name }) => {
 const updatedImg=profile_path ? `${imgUrl}${profile_path}` : img
  return (
    <div className="flex flex-col text-center  items-center gap-1">
         <picture>
          <source
            sizes="(min-width: 1200px) 730w"
            srcSet={`${updatedImg} 730w`}
          ></source>
          <source
            sizes="(max-width: 1199px) 610w"
            srcSet={`${updatedImg} 610w`}
          ></source>
          <source
            sizes="(max-width: 380px) 350w"
            srcSet={`${updatedImg} 350w`}
          ></source>
      <img
        src={updatedImg}
        alt={name}
        className="rounded-full  w-20 h-20  md:w-36 md:h-36"
      ></img></picture>
      <span className="line">{name}</span>
      <p className="line">{character}</p>
    </div>
  );
};

export default CastPerson;
