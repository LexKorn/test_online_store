import React, { Component } from "react";
import Slider from "react-slick";

import pic01 from '../../../assets/images/catalog/01.png';
import pic02 from '../../../assets/images/catalog/02.png';
import pic03 from '../../../assets/images/catalog/03.png';
import pic04 from '../../../assets/images/catalog/04.png';
import banner from '../../../assets/images/banner/banner1.png';

import './slickSlider.sass';


export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 3,
      speed: 1000,
      dots: true,
    //   autoplay: true,
      autoplaySpeed: 4000,
      focusOnSelect: true,
      initialSlide: 1
    //   variableWidth: true
    //   adaptiveHeight: true
    };
    return (
      <div className="banner-slider">
        <Slider {...settings}>
          <div>
            <img src={pic01} alt='pic' />
          </div>
          <div>
            <img src={pic02} alt='pic' />
          </div>
          <div>
            <img src={pic03} alt='pic' />
          </div>
          <div>
            <img src={pic04} alt='pic' />
          </div>
        </Slider>
      </div>
    );
  }
}