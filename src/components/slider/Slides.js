import React from 'react';
import qnt from "../../media/qnt.jpg";
import sia from "../../media/sia.jpg";
import "./Slider.css";

const slidesInfo= [
    {
src: "https://media.itpro.co.uk/image/upload/v1583403884/itpro/2020/03/Oracle%20logo.jpg",
alt:"sd",
desc: "ORACLE"

    },
    {
        src: "https://smartkyc.com/wp-content/uploads/2020/06/782e6770-6727-469b-936b-ca863247a8ea-1560917344877.png",
        alt:"sd",
        desc: "DELOITTE"
        
            },
            {
                src: sia,
                alt:"sd",
                desc: "SIA"
                
                    },
]

const slides = slidesInfo.map(slide =>(
<div className="slide-container">
    <img  src={slide.src} alt={slide.alt}/>
    <div className="slide-desc">

        <span>{slide.desc}</span>
    </div>
</div>

))

export default slides;