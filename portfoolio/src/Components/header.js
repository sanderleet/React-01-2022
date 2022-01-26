import React from "react";
import { NavLink } from "react-router-dom";
import introHeaderPic from "./intro.jpg"


function Header() {
  return (
    <nav>         
        <NavLink exact="true" className="active" to="/">      
            <img src={introHeaderPic} alt="" className="Intro-pic"/> 
            <div className="centered1"><h1>Portfoolio</h1></div>
        </NavLink>
    </nav>
  );
}
export default Header;
