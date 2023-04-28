import React from 'react'
import Slider from 'react-slick'
import { settings } from '../../utilis/settings'
const CastsSkeleton = () => {
    
  return (
    <div className='slider-container md:px-5 space-y-20  md:space-y-32'>
        
    <h1 className='title '>Top Casts</h1>


   <Slider  className=' flex  contain' {...settings}>
     {[1,3,4,5,6,7,7,8,9,9,0,0].map((_,index)=>{
       return (
        <div key={index} className="flex flex-col text-center  items-center  space-y-1 ">
          <div
           
            className="rounded-full   skeleton  w-20 h-20  md:w-36 md:h-36"
          ></div>
          <span className="line w-1/2 skeleton-text skeleton"></span>
          <p className="line  w-1/2 skeleton-text skeleton"></p>
        </div>)
     })}  
   </Slider>
</div>
  )
}

export default CastsSkeleton