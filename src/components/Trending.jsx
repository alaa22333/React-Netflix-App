import MoviesSample from "./MoviesSample";
import { useGetTrendingQuery } from "../store/Services/Apis";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
import CardSkeleton from "./Skeletons/CardSkeleton";
function Trending() {
  const { genre } = useSelector((state) => {
    return state.movies;
  });


  const { data, isLoading, isFetching,error } = useGetTrendingQuery(genre);
 
  if(isLoading ||isFetching){
   return <CardSkeleton/>
   
  }
  if(error){
   return <Error />
  }
  return (
    <MoviesSample  movies={data} />
  );
}

export default Trending;
