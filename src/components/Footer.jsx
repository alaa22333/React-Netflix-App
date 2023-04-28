import React from 'react'

const Footer = () => {
  return (
  <div className='bg-black items-center  flex justify-center mt-20 h-14 shadow-lg  w-full'>
    <p >&copy;  {new Date().getFullYear()} <span className='text-lg px-2 text-red-500'>Netflix</span> 
All rights reserved</p>
  </div>
  )
}

export default Footer