import React, { Component } from "react";
import Slider from "react-slick";
import { css } from "@emotion/react";
import Card from "../components/card";

const container = css`
  margin-bottom: 80px;
`;

export default class Works extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      centerMode: true,
      autoplay: true,
      swipeToSlide: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div css={container}>
        <Slider {...settings}>
          <figure>
            <Card />
          </figure>
          <figure>
            <Card />
          </figure>
          <figure>
            <Card />
          </figure>
          <figure>
            <Card />
          </figure>
          <figure>
            <Card />
          </figure>
          <figure>
            <Card />
          </figure>
        </Slider>
      </div>
    );
  }
}