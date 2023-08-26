import Aos from "aos";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../components";
import { auth } from "../firebase.config";
import "aos/dist/aos.css";
import { errorFun } from "../utilis/helpers";
import { IoLogoGoogle } from "react-icons/io";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const { search } = useSelector((state) => {
    return state.movies;
  });

  //sign in
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        toast.success("You've successfully logged In!");
        if (search) {
          navigate(`/movie/${search}`);
        } else {
          navigate("/");
        }
      });
    } catch (error) {
      toast.error("Invalid Sign In try again!");
    }
  };

  const handleSignIn = async (e, email, password) => {
    e.preventDefault();
   
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      setTimeout(() => {
        if (search) {
          navigate(`/movie/${search}`);
        } else {
          navigate("/");
        }
      }, 1000);
      toast.success("you successfully logged in!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setLoading(false);
    } catch (error) {
      errorFun("The email address is already in use");
      if (error.code == "auth/email-already-in-use") {
        errorFun("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        errorFun("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        errorFun("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        errorFun("The password is too weak.");
      }
    }
  };
  useEffect(() => {
    Aos.init({ delay: 200, duration: 1500 });
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <div
        data-aos="fade-up"
        className="flex justify-center   gap-3 flex-col items-center rounded-lg mt-20 p-10 md:px-14 px-6  bg-black/80 sm:w-96 w-full mx-auto "
      >
        <h1 className="text-center text-main text-3xl">Sign In</h1>
        <form className="md:w-60 w-full ">
          <button
            onClick={handleGoogleSignIn}
            className="bg-main rounded-lg p-2 hover:bg-main/70 mt-4 text-white w-full justify-center items-center flex gap-2"
          >
            <IoLogoGoogle className="text-xl" /> Sign In with Google
          </button>
        </form>
        <div className="flex w-full mx-auto justify-center py-2  items-center flex-nowrap  flex-row ">
          <hr className="w-1/4 " />
          <div className="px-2 text-main  w-1.2/4">Or Sign with</div>
          <hr className="w-1/4 " />
        </div>
        <form
          className=" space-y-10 text-center "
          onSubmit={(e) => handleSignIn(e, email, password)}
        >
          <input
            className="w-full   h-9 md:h-10 p-3 rounded-lg outline-none  bg-slate-200 placeholder:text-slate-500"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="w-full h-9 md:h-10 p-3 rounded-lg outline-none bg-slate-200  placeholder:text-slate-500"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="btn px-10 py-2 text-lg ">Login</button>
        </form>
        <p className="font-medium md:text-sm">
          Don't have an account ?
          <Link
            className="text-main px-1 font-semibold "
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </div>{" "}
      <ToastContainer />
    </div>
  );
};

export default SignIn;
