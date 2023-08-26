import React from "react";
import MovieCard from "./MovieCard";
const MoviesSample = ({ movies}) => {

  if (movies) {
    movies = movies.results.filter(
      (movie) => movie.title || movie.original_title
    );
  }
  

  return (
    <section className="movies-section md:px-10 pb-32">


      {movies?.length > 0 &&
        movies.map((movie,i) => {

          return  <MovieCard key={i} {...movie} />
        })}
    </section>
  );
};

export default MoviesSample;
