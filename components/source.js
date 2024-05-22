import React from "react";
import Link from "next/link";
// import ReactStars from "react-stars";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Source({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <img
        className="slick-arrow"
        src="/images/arrow-left.svg"
        alt="Previous"
      />
    ),
    nextArrow: (
      <img className="slick-arrow" src="/images/arrow-right.svg" alt="Next" />
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((val) => {
          return (
            <div className="item" key={val.id}>
              <div className="inner">
                <div className="source_flex">
                  <div className="image">
                    <img src={val.image} alt={val.name} />
                  </div>
                  <div className="source_bottom">
                    <p>{val.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
