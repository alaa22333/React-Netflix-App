import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { searchTerm } from "../store";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase.config";
import useAuth from "../Custom-hooks/useAuth";
import logo2 from "../assets/logo2.png";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const { search } = useSelector((state) => {
    return state.movies;
  });
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);

      setLoading(false);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      toast.success("You are logged out please sign in", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  const handleChange = (value) => {
    if (value.trim()) {
      dispatch(searchTerm(value));
    } else {
      dispatch(searchTerm(""));
      navigate("/");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <header className="w-full  bg-black/70  sticky top-0 py-2 z-20   ">
        <div className="justify-between  contain  md:gap-x-8 ">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/"
            className="h-full w-40   md:text-2xl sm:text-xl  px-2 cursor-pointer text  "
          >
            <img
              className="h-full  rounded-lg object-cover w-full"
              src={logo2}
            ></img>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="flex   flex-1  border-b   items-center bg-black px-3 md:space-x-2   rounded-lg   border-main "
          >
            <input
              value={search}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              className=" outline-none w-20 placeholder:text-white  flex-1 text-white rounded-lg bg-black/70 md:px-4 "
              placeholder="Search"
            ></input>
            <NavLink
              to={currentUser ? search && `/movie/${search}` : "/login"}
              className="text-main "
            >
              <FaSearch />
            </NavLink>
          </form>
          <div className="px-2">
            {currentUser ? (
              <div className="group relative flex justify-center">
                <button
                  onClick={() => {
                    logOut();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className=" flex md:py-1 p-2 gap-2 md:px-6  md:btn xl:text-lg "
                >
                  <BiLogOut className="text-2xl md:hidden block text-white" />

                  <span className="md:block hidden ">Sign Out</span>
                </button>
                <span className="tooltip">Sign out</span>
              </div>
            ) : (
              <div className="group relative flex justify-center">
                <NavLink
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/login"
                  className="flex relative md:py-1 p-2 md:px-6 gap-2  md:btn xl:text-lg "
                >
                  <BiLogIn className="text-2xl md:hidden block text-white" />
                  <span className="md:block hidden "> Sign In</span>
                </NavLink>
                <span className="tooltip">Sign In</span>
              </div>
            )}
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};
export default Header;
