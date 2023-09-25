import React, { Component } from "react";
import Slider from "react-slick";
import bg from './img/전독시1.jpg';


export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={bg} />
          </div>
          <div>
            <img src={bg} />
          </div>
          <div>
            <img src={bg} />
          </div>
          <div>
            <img src={bg} />
          </div>
        </Slider>
      </div>
    );
  }
}