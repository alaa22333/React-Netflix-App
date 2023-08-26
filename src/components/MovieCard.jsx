import moment from "moment/moment";
import { NavLink } from "react-router-dom";
import { imgUrl } from "../utilis/lists";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
function MovieCard({
  release_date,
  title,
  poster_path,
  id,
  backdrop_path,
  original_title,
}) {
  const updatedImg = poster_path
    ? `${imgUrl}${poster_path || backdrop_path}`
    : "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

  useEffect(() => {
    Aos.init({ delay: 200, duration: 1200 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col  w-auto    xl:w-56 h-70 shadow-lg shadow-main/50 p-7`}
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
          alt="movie card"
          className="w-full h-60 max-w-full"
        ></img>
      </picture>
      <div className=" flex text-slate-400 flex-col justify-center items-start space-y-2  ">
        <h1 className="text-lg line-clamp-1 hover:w-auto hover:line-clamp-none w-30 text-slate-100">
          {title || original_title}
        </h1>
        <p className="text-sm line-clamp-1 hover:line-clamp-none ">
          Released {moment(release_date).format("LL")}
        </p>
        <NavLink
          className="shadow-lg text-white shadow-main text-lg border border-main px-5  hover:bg-main/50 mx-auto transition-all duration-400 ease-linear rounded-sm"
          to={`/movies/:${id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Details
        </NavLink>
      </div>
    </div>
  );
}

export default MovieCard;
