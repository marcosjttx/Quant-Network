import React, { useState } from "react";
import "./Navbar.css";
import log from "../../media/log.png";
import { ReactComponent as CloseMenu } from "../../media/x.svg";
import { ReactComponent as MenuIcon } from "../../media/menu.svg";

const Navbar = ({ isScrolling }) => {


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`
    }>

      <div className="navbar-logo" onClick={toTheTop} >
        <img src={log} className="navbar-img " alt="logo" />
      </div>
      <div className="navbar-elements2" >
        <div className="navbar-elements" >
          ABOUT
        </div>
        <div className="navbar-elements">
          BLOG
        </div>
        <div className="navbar-elements" >
          SIGN-IN
        </div>
        <div className="navbar-elements">
          INFO
        </div>
        <div className="button-container"><button className={`btn ${isScrolling > 20 ? "scrolling2" : null}`
    }>
          CONTACT
        </button></div>
      </div>
      
   

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
   </div>






      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          ABOUT
        </li>
        <li className="option" onClick={closeMobileMenu}>
          CONTACT
        </li>
        <li className="option" onClick={closeMobileMenu}>
          BLOG
        </li>
        <li className="option mobile-option" onClick={closeMobileMenu}>
          SIGN-IN
        </li>


        <li className=" option mobile-option" onClick={closeMobileMenu}>
        </li></ul>








    </nav>

  )


}

export default Navbar
