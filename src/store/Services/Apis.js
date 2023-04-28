import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainUrl } from "../../utilis/lists";
const api_key = import.meta.env.VITE_API_KEY;
export const movieCoreApi = createApi({
  reducerPath: "movieCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: mainUrl,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (genre) => `4/list/${genre}?page=1&api_key=${api_key}`,
    }),
    getTopRated: builder.query({
      query: (genre) => `3/movie/${genre}?api_key=${api_key}&language=en-US&page=1`,
    }),
    getTrending: builder.query({
      query: (genre) => `3/${genre}/all/week?api_key=${api_key}`,
    }),
    getMovieItem: builder.query({
      query: (id) => `3/movie/${id}?api_key=${api_key}&language=en-US`,
    }),
    getTopCasts: builder.query({
      query: (id) => `3/movie/${id}/credits?api_key=${api_key}&language=en-US`,
    }),
    getVideos: builder.query({
      query: (id) => `3/movie/${id}/videos?api_key=${api_key}&language=en-US`,
    }),
    getSimilar: builder.query({
      query: (id) =>
        `3/movie/${id}/similar?api_key=${
         api_key
        }&language=en-US&page=1`,
    }),
    getSearchMovies:builder.query({
      query:(search)=>`3/search/movie?api_key=${api_key}&language=en-US&query=${search}`
    })
  }),
});

export const  {useGetMoviesQuery,useGetTrendingQuery,useGetSearchMoviesQuery,useGetVideosQuery,useGetTopCastsQuery,useGetTopRatedQuery,useGetMovieItemQuery,useGetSimilarQuery}=movieCoreApi