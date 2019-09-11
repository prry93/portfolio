import React, { Component } from 'react'
import "./portfolio.css"
import Carousel from 'nuka-carousel'
import ContentData from './components/content.json'
import Videos from './components/videoimport'
// import Video from './components/video'
// import Slides from './components/slides'
// import Content from './components/content'

import {img0, img1, img2, img3, img4, giphy, gem, cssGrid, igloo, arrowF, arrowB} from "./components/imageimport"


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
    const images = [img1, img0, img2, img3, img4];
    // Assigned images to a variable and placed variable in an array since React won't directly let me render objects.
    const screencaps = images[index];
    // screencaps will assign the src variable of each image in the 'image' array with with the slide index. In the return, a img tag will display the correct image associated with the index.

    return (
      <div>

        <div className="wrapper">

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
        style={{
          position: "absolute",
                  top: 25,
                  left: 110,
                  width: "75%",
                  height: "75%"
        }}
        src={Videos[index]}
        frameBorder="0"
      />
    </div>
          </div>

          <div className="content">
            <div className="contentContainer">
              <h1>{ContentData[index].title}</h1>
              <p className="paragraph">{ContentData[index].paragraph}</p>

              <h3 className="skills">Built with: <p className="paragraph2">{ContentData[index].skills}</p></h3>

              <h3>Links:</h3>
              <p> {ContentData[index].links[0]} {ContentData[index].links[1]}</p>
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
              <img src={gem} alt="gem card" />
              <img src={giphy} alt="giphy card" />
              <img src={igloo} alt="igloo card" />
              <img src={cssGrid} alt="css grid card" />
              <img src={igloo} alt="igloo card" />
              
              </Carousel>
            </div>
            <div className="left">
              <button className="leftButton" onClick={this.previousSlide}><img src={arrowB} alt="backwards arrow"></img></button>
            </div>
            <div className="right" >
              <button className="rightButton" onClick={this.nextSlide}><img src={arrowF} alt="forward arrow"></img></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}



export default Portfolio;