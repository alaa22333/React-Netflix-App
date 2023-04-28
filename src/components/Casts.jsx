import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {CastPerson} from './index';
import Slider from "react-slick";
import { settings } from '../utilis/settings';


   
const Casts = ({cast}) => {
    
      return (
        <div className=' slider-container'>
        
           <h1 className='title pl-5 '>Top Casts</h1>

      
       { cast.length>3 ? (<Slider  className=' flex container mx-auto md:px-1 items-center' {...settings}>
            {cast.map((person)=>{
             return <CastPerson  key={person.id} {...person}/>
            })}  
          </Slider>):<div className=' flex  mx-auto md:gap-14 gap-4 md:px-1 items-center'>
          {cast.map((person)=>{
             return <CastPerson  key={person.id} {...person}/>
            })}  
            </div>}
      </div>
      );
    }
  


export default Casts