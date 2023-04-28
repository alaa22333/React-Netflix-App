import { useSelector } from "react-redux";
import {memo}from 'react'
import { useGetMoviesQuery } from "../store/Services/Apis";
import {
  Trending,
  Top_Rated,
  MoviesSample,
  Error,
  MovieSkeleton,
} from "./index";
import CardSkeleton from "./Skeletons/CardSkeleton";

const Movies = () => {
  const { genre } = useSelector((state) => {
    return state.movies;
  });

  const { data, isLoading, isFetching, error } = useGetMoviesQuery(genre);
  if (error) {
    <Error title={"Something Went Wrong Please Try Again"} />;
  }
  if (genre === "trending") {
    return <Trending />;
  } else if (genre === "top_rated") {
    return <Top_Rated />;
  } else {
    if (isLoading || isFetching) {
      return <CardSkeleton />;
    } else {
      return <MoviesSample movies={data} />;
    }
  }
};

export default memo(Movies);
