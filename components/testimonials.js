import React from "react";
import Link from "next/link";
import ReactStars from 'react-stars'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Testimonials({data}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:<img className="slick-arrow" src="/images/arrow-left.svg" alt="Previous" />,
    nextArrow:<img className="slick-arrow" src="/images/arrow-right.svg" alt="Next" />,
    responsive: [
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
      <Slider {...settings}>
        {data.map((val)=>{
            return(
                <div className="item" key={val.id}>
                    <div className="inner">
                        <div className="testi_flex">
                          <div className="testi_icon">
                              <img src={val.image} alt={val.name}/>
                          </div>
                          <div className="testi_footer">
                            <h5>{val.name}</h5>
                            <ReactStars
                              className="rates"
                              count={5}
                              value={val.star}
                              size={23}
                              color1={'#ddd'}
                              color2={'#FABD6B'}
                              edit={false}/>
                          </div>
                        </div>
                        <p>{val.comment}</p>
                    </div>
                </div>
            );
        })}
      </Slider>
    </>
  );
}
