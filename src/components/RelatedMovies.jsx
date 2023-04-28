import React from "react";
import Slider from "react-slick";

import { MovieCard } from "./index";

const RelatedMovies = ({ results }) => {
 
  
 
  return (
    results?.length&&   <div className="slider-container ">
      <h1 className="title  pl-5   ">Similar Movies</h1>

    <section className="movies-section  mt-0">
      {results&& results.slice(0,10).map((movie,i)=>{
        return<MovieCard key={i}  {...movie}/>
      })}

    </section>
    </div>
  );
};

export default RelatedMovies;
