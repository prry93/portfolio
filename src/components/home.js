import React from "react";
import '../styles/home.css';

class Homepage extends React.Component {

  render() {
    return (
      <div className="flexContainer">
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
}

export default Homepage;