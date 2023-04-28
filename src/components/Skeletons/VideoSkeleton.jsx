import React from 'react'
import Slider from 'react-slick'
const VideoSkeleton = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        initialSlide: 0,
    }    
  return (
    <div className={`slider-container  md:px-5 `} >
    <h1 className={`title mb-32 mt-20 md:my-32   `}>Official Videos</h1>

     
       
          <div className="w-full ">
            <div className="w-full   h-96   max-h-full ">
              <div
                className={`w-full h-full  -mt-20 skeleton ` }
               
              >
                
              </div>
            </div>

          </div>
        );
    
    
  </div>
  )
}

export default VideoSkeleton