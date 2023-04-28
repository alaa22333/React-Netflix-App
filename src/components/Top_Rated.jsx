import { useSelector } from "react-redux";
import { ImSpinner8 } from "react-icons/im";
import { useGetTopRatedQuery } from "../store/Services/Apis";
import {MoviesSample,Loading,Error}from './index'
import CardSkeleton from "./Skeletons/CardSkeleton";
const Top_Rated = () => {
  const { genre } = useSelector((store) => {
    return store.movies;
  });
  const { data, isLoading, isFetching,error } = useGetTopRatedQuery(genre);

  if(isLoading ||isFetching){
    return <CardSkeleton/>
    
   }
   if(error){
  return  <Error />
  }

  return (
    <MoviesSample movies={data} />
  );
};

export default Top_Rated;
