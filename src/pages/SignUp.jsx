import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { auth, db } from "../firebase.config";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { errorFun } from "../utilis/helpers";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (e, email, password) => {
       
    e.preventDefault();
    
    try {
     
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
     
      const user = userCredential.user;

      const docRef = await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
      });
     

      setTimeout(() => {
        toast.success("you've already signed up!",{
          position: toast.POSITION.BOTTOM_RIGHT
      });
        navigate(    "/");
      }, 1000);

 
      
    
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

  return (
    <div className="min-h-screen">
      <div
        className="flex relative justify-center space-y-10 flex-col items-center rounded-lg mt-32 py-20 md:px-14 px-6 my-4 bg-black/80 sm:w-96 w-full h-full mx-auto "
      >
        <h1 className="text-center text-main text-3xl">Sign Up</h1>
        <form onSubmit={(e)=>handleSignUp(e,email,password)} className=" space-y-10 text-center ">
          <input
            className="w-full   h-9 md:h-10 p-3 rounded-lg outline-none  bg-slate-200 placeholder:text-slate-500 text-sm"
            placeholder="Enter Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="w-full h-9 md:h-10 p-3 rounded-lg outline-none bg-slate-200  placeholder:text-slate-500 text-sm"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="btn px-10 py-2 text-lg ">Create an Account</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
