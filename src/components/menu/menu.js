import React from "react";
import {slide as Menu} from "react-burger-menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./menu.css";
import Burger from "../../images/burgerMenu.png";
// gets burger menu image from the correct directory, used in customBurgerIcon


export default props => {
  return(
    <Menu  {...props} customBurgerIcon={ <img src={Burger} alt="menu" />}>
      
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

// exported to home.js
