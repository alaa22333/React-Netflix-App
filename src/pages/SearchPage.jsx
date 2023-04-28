import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import { Error, Loading, MoviesSample } from "../components";
import { isClickedFun, searchTerm } from "../store";
import { useGetSearchMoviesQuery } from "../store/Services/Apis";
import CardSkeleton from "../components/Skeletons/CardSkeleton";

const SearchPage = () => {
  const { page, search } = useSelector((state) => {
    return state.movies;
  });
  const { query } = useParams();

  const {
    data: searchMovies,
    isFetching,
    isLoading,
    error,
  } = useGetSearchMoviesQuery(query);
  if (isLoading || isFetching) {
    return <CardSkeleton />;
  }
  if (error) {
    return <Error />;
  }
  if (searchMovies.results.length === 0) {
    return <Error title={`'${query}' Is Not Found.`} />;
  }

  if (query || search.trim()) {
    return (
      <div className="min-h-screen">
        <div className="  contain justify-between px-2 mt-10 ">
          <h1 className="text-xl    text-main">
            {" "}
            Search results of
            <span className="space-y-0 ml-1"> {`  ' ${query} ' `}</span>
          </h1>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn px-6 py-2 "
          >
            Back To Movies
          </Link>
        </div>

        <MoviesSample movies={searchMovies} />
      </div>
    );
  }
};

export default SearchPage;
