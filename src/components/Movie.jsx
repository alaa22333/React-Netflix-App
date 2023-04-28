import React, { Suspense, lazy, useState,memo } from "react";
import {
  Trailer,
  MovieSkeleton,
  CastsSkeleton,
  VideoSkeleton,
  MoviesSample,
  Error,
} from "./index";

import {
  useGetMovieItemQuery,
  useGetSimilarQuery,
  useGetTopCastsQuery,
  useGetVideosQuery,
} from "../store/Services/Apis";
import CardSkeleton from "./Skeletons/CardSkeleton";
const Videos = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1300));
  return import("./Videos");
});
const Details = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return import("./Details");
});
const Casts = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return import("./Casts");
});
const RelatedMovies = lazy(() => import("./RelatedMovies"));
const Movie = ({ id }) => {
  let trailer;
  const [play, setPlay] = useState(false);
  const [close, setClose] = useState(true);
  const { data} = useGetMovieItemQuery(id);
  const {
    data: casts,
 
  } = useGetTopCastsQuery(id);
  const {
    data: videos,
    isFetching: fetchVideos,
    isLoading: loadVideos,
    error,
  } = useGetVideosQuery(id);
  const {
    data: similar,
 
  } = useGetSimilarQuery(id);
  //filter trailers
  if (videos?.results) {
    trailer = videos.results.find((item) => item.type === "Trailer");
  }

  //error

  if (error) {
    return <Error />;
  }
  if (data?.vote_average === 0) {
    return <Error title={"This Movie Is Not Found"} />;
  }

const director=casts?.crew?.find((one)=>one.job==='Director')
const writer=casts?.crew?.find((one)=>one.job==='Writer')

  return (
    <div className="relative min-h-screen ">
      <Suspense fallback={<MovieSkeleton />}>
        {data && (
          <Details
            {...data}
            director={director}
            writer={writer}
            trailer={trailer}
            play={play}
            close={close}
            setClose={setClose}
            setPlay={setPlay}
          />
        )}
      </Suspense>
      <Suspense fallback={<CastsSkeleton />}>
        {casts?.cast.length && <Casts {...casts} />}
      </Suspense>
      <Suspense fallback={ <VideoSkeleton />}>
        {videos?.results && <Videos {...videos} />}
   
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <RelatedMovies {...similar} />
      </Suspense>
      
    </div>
  );
};

export default Movie;
