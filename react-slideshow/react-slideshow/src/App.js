import React, { Component } from 'react';

import Slide from './components/Slide'
import RightArrow from './components/Right'
import LeftArrow from './components/Left'

import './App.css';

class Slider extends Component {
  constructor(props) {
    super(props)


    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) {
      return this.setState(prevState => ({
        currentIndex: this.state.images.length - 1,
        translateValue: - ((this.state.images.length-1) * (this.sliderWidth()))
      })
      )
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    })
    )    

    console.log(this.state.translateValue);
    console.log(this.state.currentIndex);
  }
  goToNextSlide = () => {
    // console.log('next');

    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - (this.slideWidth())
    })

    )
    console.log(this.state.translateValue);
    console.log(this.state.currentIndex);
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }
  sliderWidth = () => {
    return document.querySelector('.slider').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

export default Slider;
