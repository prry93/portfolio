import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import {img0, img1, img2, img3, img4, giphy, gem, cssGrid, igloo, arrowF, arrowB} from "./imageimport"

class Slides extends Component{
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

  render() {
    return(
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
    )
  }
}

export default Slides;