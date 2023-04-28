import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  
  return (
  
  <section className=' px-5 flex-col space-y-8 flex my-72  items-center justify-center '>
    
  <h1 className='text-slate-200  text-center leading-7 text-lg md:text-3xl ' >404 | Page Is Not Found </h1>
 <Link to='/' className='btn  px-6 py-2'>Back To Movies</Link>
 </section> )
 
}

export default ErrorPage