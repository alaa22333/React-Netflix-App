import { useParams } from "react-router-dom";
import { Movie } from "../components";

const MovieItem = () => {
  let { id } = useParams();

  id = Number(id.split(":").join(""));
  return (
    <main
      className="backGround"
      style={{
        background:
          "linear-gradient(to bottom,rgb(0, 0, 0),rgba(0, 0, 0, 0.685)),url(https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)",
      }}
    >
      <Movie id={id} />
    </main>
  );
};

export default MovieItem;
