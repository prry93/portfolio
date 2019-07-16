import React from "react";
import Menu from '../menu/menu';

function Portfolio() {

    return (
      <div className="flexContainer">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"flexContainer"} />
        <div className="top">
          <h1>Perry Lin</h1>
          <p>Portfolio</p>
          
        </div>
        <div className="bottom">
          <h2>About Me:</h2>
          <p>Insert text here.</p>
        </div>
      </div>
    )
}

export default Portfolio;