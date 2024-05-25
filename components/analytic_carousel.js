import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function Analytics_carousel({ data }) {
  const settings = {
    dots: true,
    arrows: true,
    nav: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="analytic_carousel_full">
        {data.map((val) => {
          return (
            <div className="item" key={val.id}>
              <div className="image">
                <Image src={val.image} width={1500} height={600} priority/>
              </div>
              <div className="txt_cntnt_wide">
                <p>{val.text}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
