import lists from "../utilis/lists";
import { useDispatch, useSelector } from "react-redux";
import { changeGenre } from "../store";
import { useEffect } from "react";

import { NavLink } from "react-router-dom";
const NavBar = () => {
  const dispatch = useDispatch();
  const { genre, movies } = useSelector((store) => {
    return store.movies;
  });
  const handleClick = (id) => {
    dispatch(changeGenre(id));
  };

  return (
    <div className="flex gap-x-1   text-white whitespace-nowrap p-4 overflow-scroll scrollbar-hide w-full px-6 justify-between">
      {lists &&
        lists.length > 0 &&
        lists.map((list) => {
          const { id, name } = list;
          return (
            <NavLink
              key={id}
              className={`link ${id === genre && "text-main underline"}`}
              onClick={() => {
                handleClick(id);
              }}
              to={`/?genre=${name}`}
            >
              {name}
            </NavLink>
          );
        })}
    </div>
  );
};
export default NavBar;
