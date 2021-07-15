import React from 'react'
import "./Cover.css";
import qnt from "../../media/qnt.jpg";
import arrow from "../../media/white.png";
const Cover = () => {
  function scrollToTestDiv() {
    const divElement = document.getElementById('test');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="cover-container">
      <img src={qnt} className="imagen" alt="logo" />
      <h1>QUANT</h1>
      <p>The Network of Networks</p>
      <div className="arrow">
        <img src={arrow} onClick={scrollToTestDiv} className="arrow" alt="logo" />
      </div>
</div>



  )
}

export default Cover
