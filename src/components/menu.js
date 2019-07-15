import React from "react";
import {slide as Menu} from "react-burger-menu";
import '../styles/menu';

export default props => {
  return(
    <Menu>
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

