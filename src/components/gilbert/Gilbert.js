import React from 'react'
import "./Gilbert.css";
import log from "../../media/gil2.jpeg";
function Gilbert() {
    return (


        <div className="gilbert-container">

            <div className="gilbert-img"><img src={log} className="about-img" alt="logo" /></div>
            <div className="gilbert-text">
                We’ve solved DLT interoperability, thereby positioning us to rearchitect our systems and create networks as connected as the world we live in, to help drive tremendous value, open up new markets and realise new efficiencies for enterprise, governments and individuals alike.


                <p style={{ marginTop: "5px" }}>
                    -Gilbert Verdian CEO & Founder of Quant
                </p>
            </div>


        </div>


    )
}

export default Gilbert
