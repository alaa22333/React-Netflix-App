import React from "react";
import { NavLink } from "react-router-dom";

const Error = ({ title }) => {
  return (
    <section className=" min-h-screen px-5 flex-col gap-y-8 flex   items-center justify-center ">
      <h1 className="text-slate-200  text-center leading-7 text-lg md:text-3xl ">
        {title || "Something Went Wrong Please Try Again..."}{" "}
      </h1>
      <NavLink
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="btn  px-6 py-2"
      >
        Back To Movies
      </NavLink>
    </section>
  );
};

export default Error;
