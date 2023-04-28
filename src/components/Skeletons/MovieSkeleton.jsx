import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { FaPlay } from 'react-icons/fa';
const MovieSkeleton = () => {

  return (
    <section
      
    
      className={` bg-no-repeat  mt-14 h-full flex-col flex md:px-5 bg-black/40  gap-6  lg:flex-row justify-center items-center    bg-cover mx-auto   contain    `}
    >
      {/* poster */}
   

        <div
          
          className="skeleton rounded-lg max-h-full max-w-full w-96 h-96  "
       
        ></div>
     

      {/* details */}
      <div className="flex flex-col sm:w-full w-60   gap-4 flex-1  items-start  ">
        <h1 className="capitalize  skeleton ">
          
        </h1>
        <p className='skeleton skeleton-text'></p>
        { (
          <div className="flex  justify-between  flex-wrap ">
            {[1,2,3,4].map((genre,i) => {
              return <button  key={i}className={`btn skeleton} `}></button>;
            })}
          </div>
        )}
        <div className="flex gap-6  flex-row">
         
            <div
             
              className="px-5 rounded-full   skeleton text-xl  "
            >
           
            </div>
            <div
             
              className="px-5 rounded-full   skeleton text-xl  "
            >
            
            </div>
          )
        </div>
        <h2 className="text-lg  skeleton skeleton-text pt-5"></h2>
        <p className="text-sm   sm:line-clamp-none skeleton skeleton-text line-clamp-none">
         
        </p>
        <div className="flex divide-y-2 w-4/5 gap-6   flex-col divide-slate-500/50">
          <div className="flex  flex-wrap  justify-between items-center gap-y-1  pt-5  ">
            <p className='skeleton skeleton-text'>
              <span className='skeleton skeleton-text'> </span>

             
            </p>
            <p className='skeleton skeleton-text'>
              <span className='skeleton skeleton-text'> </span>
             
            </p>
            <p className='skeleton skeleton-text'>
              <span className='skeleton skeleton-text'> </span>
              
            </p>
          </div>
          <p className="pt-5 skeleton skeleton-text">
            <span className='skeleton skeleton-text'></span>
           
          </p>
          <p className="pt-5 skeleton skeleton-text">
            <span className='skeleton skeleton-text'> </span>
           
          </p>
        </div>
      </div>
    </section>
  
  )
}

export default MovieSkeleton