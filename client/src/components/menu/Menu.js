import React from "react";
import { NavLink } from "react-router-dom";
// import Burger from "../../images/burgerMenu.png";
// gets burger menu image from the correct directory, used in customBurgerIcon


export default ({close}) => (
    <div className="menu">
      <ul>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );

