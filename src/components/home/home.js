import React from "react";
import "./home.css";
import Menu from '../menu/menu';

export default Homepage => {

    return (
      <div className="flexContainer">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="top">
          <h1>Perry Lin</h1>
          <p>Maker of things</p>
        </div>
        <div className="bottom">
          <h2>About Me:</h2>
          <p>Insert text here.</p>
        </div>
      </div>
    )
}

