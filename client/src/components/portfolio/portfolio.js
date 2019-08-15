import React, { Component } from 'react'
import "./portfolio.css"
import Carousel from 'nuka-carousel'

import {img0, img1, img2, img3, img4, giphy, gem, cssGrid, igloo, arrowF, arrowB} from "./imageimport"


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
      opacityScale: 0.5
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

// Added Slides function to manually change the slide index to change slide shown, instead of using the previous/next buttons from the component.
//  Default previous/next functions do not work when slidesToShow is more than 1. 
// Ex: when slideToShow is 3 and length is 3, carousel won't move at all. SlideToShow at 2, length at 3 will have carousel move next once then not work.
// If statements will cycle the carousel back to the end/beginning.

  render() {
    const images = [img0, img1, img2, img3, img4];
    // Assigned images to a variable since React won't directly let me render an array of objects
    const screencaps = images[this.state.slideIndex];
    // screencaps will pair the src of each image with with the slide index. In the return, a img tag will display the correct image associated with the index.

    return (
      <div>

        <div className="wrapper">
          <div className="screen">
            <img className="screenContainer" src={screencaps} alt="screenshots of projects" />
          </div>
          <div className="content">
            <img src={screencaps} alt="text content"/>
          </div>
          <div className="carousel" > 
            <Carousel 
              slidesToShow={this.state.slidesToShow}
              transitionMode={this.state.transitionMode}
              slideIndex={this.state.slideIndex}
              opacityScale={this.state.opacityScale}
              wrapAround={this.state.wrapAround}
              renderCenterLeftControls={ () => (
                  <button className="leftButton"  onClick={this.previousSlide}><img src={arrowB} alt="backwards arrow"></img></button>
                )}
              renderCenterRightControls={() => (
                  <button className="rightButton"  onClick={this.nextSlide}><img src={arrowF} alt="forward arrow"></img></button>
                )}
              renderBottomCenterControls={false}
              >
              <img src={gem} alt="gem card" />
              <img src={giphy} alt="giphy card" />
              <img src={igloo} alt="igloo card" />
              <img src={cssGrid} alt="css grid card" />
              <img src={igloo} alt="igloo card" />
              
              </Carousel>

          </div>
        </div>

      </div>
    )
  }
}

export default Portfolio;