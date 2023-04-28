import {
  ErrorPage,
  Home,
  MovieItem,
  ProtectedPage,
  SearchPage,
  SignIn,
  SignUp,
} from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header, Loading } from "./components";
import { Suspense, lazy, useEffect } from "react";
const Footer = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve,1000));
  return import('./components/Footer');
});
function App() {
  useEffect(()=>{
window.scrollTo({top:0,behavior:'smooth'})
  },[])
  return (
    <div className="backGround  ">
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieItem />} />
        <Route path="/movie/:query" element={<ProtectedPage><SearchPage /></ProtectedPage>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Suspense fallback={<div>...</div>}> <Footer/></Suspense>
       
    
    </div>
  );
}

export default App;
