
import React from 'react'
import "./Overledger.css";
import qnt from "../../media/cons.mp4";
import arrow from "../../media/white.png";
const Overledger = () => {
    function scrollToTestDiv(){
        const divElement = document.getElementById('test');
        divElement.scrollIntoView({ behavior: 'smooth' });
      }

    return (
     <div className="cover-container1"> 
      <video src={qnt} autoPlay loop muted className="video" />
      <h1 >Overledger</h1>
      <p>The first BlockChain OS that connect the world's networks</p>
      <p>and facilities the development of multi-chain applications...</p>
      
  
    

</div>



)
};

export default Overledger

