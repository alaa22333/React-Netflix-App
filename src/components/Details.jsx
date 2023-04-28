import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { imgUrl } from "../utilis/lists";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import moment from "moment";
import MovieSkeleton from "./Skeletons/MovieSkeleton";
import Aos from "aos";
import "aos/dist/aos.css";
import Trailer from "./Trailer";
const Details = ({
  backdrop_path,
  genres,
  overview,
  tagline,
  vote_average,
  status,
  runtime,
  release_date,
  poster_path,
  title,
  setClose,
  trailer,
  close,
  play,
  director,
  writer,
  setPlay,
}) => {
  const updatedImg = poster_path
    ? `${imgUrl}${poster_path || backdrop_path}`
    : "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

  useEffect(() => {
    Aos.init({ delay: 1200, duration: 1200 });
  }, []);

  return (
    <section
      style={
        poster_path && {
          background: `url(${imgUrl}${poster_path || backdrop_path}})`,
        }
      }
      className={`  bg-no-repeat mt-14 h-full flex-col flex px-5 relative gap-6  lg:flex-row justify-center items-center    bg-cover mx-auto   contain   `}
    >
      {/* poster */}
      <div
        data-aos="flip-left"
        
        className={`  shadow-lg   shadow-black/55 `}
      >
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
            loading="lazy"
            src={updatedImg}
            className="rounded-lg max-h-full max-w-full w-96 
        "
            alt="poster"
          ></img>
        </picture>
      </div>

      {/* details */}
      <div className="flex flex-col gap-3 flex-1  items-start  ">
        <h1
          data-aos="fade-right"
         
          className="capitalize  text-2xl text-white "
        >
          {title} ({new Date(release_date).getFullYear()})
        </h1>
        <p data-aos="fade-left" data-aos-delay="1500">
          {tagline}
        </p>
        {genres && genres.length > 1 && (
          <div className="flex gap-1   flex-wrap ">
            {genres?.map((genre, i) => {
              return (
                <button
                  key={i}
                  data-aos="fade-left"
                 
                  data-aos-delay="100"
                  className={`btn m-1 `}
                >
                  {genre.name}
                </button>
              );
            })}
          </div>
        )}
        <div
          data-aos="fade-down"
       
          data-aos-delay="300"
          className="flex gap-4 text-white
     items-center  flex-row"
        >
          <CircularProgressbar
            className="w-16  text-main"
            minValue={0}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 1,
              strokeLinecap: "butt",
              pathColor: "#E50914",
              trailColor: "white",
              textColor: "white",
              textSize: "24px",
              pathTransitionDuration: 0.5,
            })}
            value={vote_average}
            maxValue={10}
            text={`${vote_average?.toFixed(1)}`}
          />
          {trailer && (
            <button
              onClick={() => {
                setPlay(true);
                setClose(false);
              }}
              className="p-5 rounded-full border-4 border-white  text-xl  hover:text-main transition duration-300 hover:border-main "
            >
              <FaPlay />
            </button>
          )}
          {trailer && (
            <p className="text-lg text-main font-bold trailer ">Trailer</p>
          )}{" "}
        </div>
        <h2
          data-aos="fade-down"
          data-aos-delay="400"
          className="text-lg  text-white pt-5"
        >
          OverView
        </h2>
        <p
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-sm text-white  sm:line-clamp-none line-clamp-1 hover:line-clamp-none"
        >
          {overview}
        </p>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="flex divide-y-2 w-4/5  gap-6 px-0   flex-col divide-slate-500/50"
        >
          <div className="flex  flex-wrap justify-between items-center gap-y-1  pt-5  ">
            <p>
              <span>Status : </span>

              {status}
            </p>
            <p>
              <span>Release Date: </span>
              {moment(release_date).format("LL")}
            </p>
            <p className="">
              <span>Runtime: </span>
              {Math.floor(runtime / 60)}h{runtime % 60}m
            </p>
          </div>
          {director && (
            <p className="pt-5">
              <span>Director: </span>
              {director?.name}
            </p>
          )}
          {writer && (
            <p className="pt-5">
              <span>Writer : </span>
              {writer?.name}
            </p>
          )}
        </div>
      </div>
      <Trailer
        trailer={trailer}
        play={play}
        close={close}
        setClose={setClose}
        setPlay={setPlay}
      />
      {play && (
        <div
       
          className="fixed h-full w-full bg-black/95  z-10"
        ></div>
      )}
    </section>
  );
};

export default Details;
