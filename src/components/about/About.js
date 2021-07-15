import React from 'react'
import qnt from "../../media/q.jpg";
import "./About.css";

const About = () => {
    return (
        <div id="test" className="about-container">
            <div className="about-desc">

<h3>Quant is the world's first provider of true universal DLT Interoperability, oriented for enterprise. With the ability to seamlessly interconnect private and public DLT.
    </h3>    
    
    <p style={{marginTop: "5px"}}>Quant is leading this revolution. We’ve already developed Overledger DLT gateway – the world’s first DLT gateway for enterprise that delivers interoperability across different systems, networks, and DLTs. Now, we’re building on this platform to help enterprises, governments, and individuals, across the globe benefit from the true potential of an incredibly powerful technology.</p>    
        </div>
            <div className="about-img">
            <img src={qnt} className="about-img" alt="logo" />
                </div>
                </div>
    )
}

export default About
