import React, { Component } from 'react'
import "./portfolio.css"
import Carousel from 'nuka-carousel'
import ContentData from './components/content.json'
import Videos from './components/videoimport'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
// import Video from './components/video'
// import Slides from './components/slides'
// import Content from './components/content'

import {giphy, gem, cssGrid, igloo, arrowF, arrowB} from "./components/imageimport"


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      length: 5,
      slidesToShow: 3,
      heightMode: "max",
      transitionMode: "scroll3d",
      wrapAround: true,
      opacityScale: 0.75,
      withoutControls: true
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  nextSlide() {
    this.setState({ slideIndex: this.state.slideIndex + 1 });
    if (this.state.slideIndex === 4) {
      this.setState({
        slideIndex: this.state.slideIndex - 4
      });
    } 
  }

  previousSlide() {
    this.setState({ slideIndex: this.state.slideIndex - 1 });   
     if (this.state.slideIndex === 0) {
      this.setState({
        slideIndex: this.state.slideIndex + 4
      })
  }
 }


  render() {
    const index = this.state.slideIndex;

    return (
      <div>
        <div className="wrapper">
          <div className="previous">
            <button className="prevButton">
              <FontAwesomeIcon icon={faChevronCircleUp} />
            </button>
          </div>
          <div className="screen">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}
            >
              <iframe 
                title="video"
                style={{
                  position: "absolute",
                          top: 0,
                          left: 110,
                          width: "40vw",
                          height: "48vh",
                          margin: 0
                }}
                src={Videos[index]}
              />
            </div>
          </div>

          <div className="content">
            <div className="contentContainer">
              <h1 className="contentHeadline">{ContentData[index].title}</h1>
              <p className="paragraph">{ContentData[index].paragraph}</p>

              <h3 className="headline">Built with: <p className="paragraph2">{ContentData[index].skills}</p></h3>

              <h3 >Links:  <p className="paragraph2"> {ContentData[index].links[0]}</p> </h3>
              <p>{ContentData[index].links[1]}</p>
              
            </div>
          </div>

          <div className="carousel" > 
            <div className="carouselContent">
            <Carousel 
              slidesToShow={this.state.slidesToShow}
              transitionMode={this.state.transitionMode}
              slideIndex={this.state.slideIndex}
              opacityScale={this.state.opacityScale}
              wrapAround={this.state.wrapAround}
              withoutControls={this.state.withoutControls}
              renderBottomCenterControls={false}
              >
              <img src={igloo} alt="igloo card" />
              <img src={giphy} alt="giphy card" />
              <img src={igloo} alt="igloo card" />
              <img src={cssGrid} alt="css grid card" />
              <img src={gem} alt="gem card" />
              </Carousel>
            </div>
            <div className="left">
              <button className="leftButton" onClick={this.previousSlide}><img src={arrowB} alt="backwards arrow"></img></button>
            </div>
            <div className="right" >
              <button className="rightButton" onClick={this.nextSlide}><img src={arrowF} alt="forward arrow"></img></button>
            </div>
          </div>
          <div className="next">
            <button className="nextButton">
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </button>
          </div>
        </div>

      </div>
    )
  }
}



export default Portfolio;