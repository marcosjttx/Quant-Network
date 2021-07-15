import React from 'react'

import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import qnt from "../../media/qnt.jpg";

import Slides from "./Slides";
import "./Slider.css";
const Slider = () => {
    return (
      <div className="carousel-container">
        <div className="carousel-title">
          <h2 className="carousel-title">Partners</h2>
        </div>
  
        <Carousel  plugins={[
     'centered',
     'infinite',
     'arrows',
     
     {
        resolve: slidesToShowPlugin,
        options: {
         numberOfSlides: 3,
        },
      },
    
    ]}
        itemWidth={360}
       
        slides={Slides}
     offset={50}
     breakpoints={{
960:{

  itemWidth:250,
  
plugins:[
  'infinite',
  'centered',
  'arrows'




]}}}
    
   
        
        />
      </div>
    );
  };

export default Slider
