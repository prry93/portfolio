import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'

function Homepage() {

    return (
      <div className="flexContainer">
        <div className="top">
          <h1>Perry Lin</h1>
          <div className="image">

          </div>
          <p className="title">Maker of things</p>
          
        </div>
        <div className="bottom">
          <div className="bottom-text">
            <h2>About Me:</h2>
            <p>A prospective applicant with 5+ years of experience in a multitude of career fields that required extensive interpersonal communication and a meticulous attention to detail. Looking to utilize this accumulated knowledge in a new career path to challenge myself and further develop my skills.</p>
          </div>
          <div >
            <NavLink to="/portfolio">
              <button className="porfolioButton">
                <FontAwesomeIcon icon={faChevronCircleDown} />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    )
}

export default Homepage;
