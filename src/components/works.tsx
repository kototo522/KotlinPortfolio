import React, { Component } from "react";
import Slider, { Settings } from "react-slick";
import { css } from "@emotion/react";
import Card from "./card";

const container = css`
  margin-bottom: 100px;
`;

export default class Works extends Component {
  render() {
    const settings: Settings = {
      arrows: true,
      dots: true,
      infinite: true,
      centerMode: true,
      autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div css={container}>
        <Slider {...settings}>
          <Card />
          <Card />
        </Slider>
      </div>
    );
  }
}
