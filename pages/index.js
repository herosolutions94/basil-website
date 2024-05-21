import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Slider from 'react-slick';

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const trusted = [
    {
      image:"/images/logo1.svg"
    },
    {
      image:"/images/logo2.svg"
    },
    {
      image:"/images/logo3.svg"
    },
    {
      image:"/images/logo4.svg"
    },
    {
      image:"/images/logo5.svg"
    },
    {
      image:"/images/logo6.svg"
    },
    {
      image:"/images/logo7.svg"
    },
    {
      image:"/images/logo8.svg"
    }
  ]
  const delivery_result_tabs = [
    {
      id:"tab1",
      title:"Pharma Intelligence",
    },
    {
      id:"tab2",
      title:"Regulatory (MedTech)",
    },
    {
      id:"tab3",
      title:"Post-market (MedTech)",
    },
    {
      id:"tab4",
      title:"Clinical Trials",
    },
    {
      id:"tab5",
      title:"Exec Dashboard",
    },
    {
      id:"tab6",
      title:"Comparative Table Creator",
    },
    {
      id:"tab7",
      title:"Data Modernization",
    },
    {
      id:"tab8",
      title:"API / Data Integration",
    },
  ]
  return (
    <>
      <main>
        <section className="banner">
          <div className="contain">
            <div className="txt">
              <h1><em>Where Data</em>Meets Discovery</h1>
              <p>Revolutionizing healthcare innovation with AI and data, driving smarter decisions and accelerating market success.</p>
              <div className="btn_blk">
                <Link href="/contact" className="site_btn">Contact Us</Link>
                <Link href="/about" className="site_btn blank blank_color_border">About Us</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="trusted_sec">
          <div className="contain">
              <h3>Trusted By</h3>
              <Slider {...settings} className="trusted_slider">
              {trusted.map((val, index) => (
                <div key={index} className="slide_item">
                  <div className="image">
                    <img src={val.image} alt="trusted by" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className="insights_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <img src="/images/rapid_insights.webp" alt="rapid insights" />
                </div>
              </div>
              <div className="colR">
                <h2>Unlock Rapid Insights with Basil</h2>
                <p>TRANSFORM PRODUCT DEVELOPMENT WITH ADVANCED AI AND MACHINE LEARNING</p>
                <p>Basil leverages advanced AI and Machine Learning technologies to dramatically speed access to the vital insights that drive product development success.</p>
                <p>Whether leveraging its powerful SaaS platform or using its technologies on your internal data, Basil unlocks intelligence buried in multiple disconnected data sources – empowering organizations to make data-driven decisions. </p>
                <div className="btn_blk">
                  <Link href="/about" className="site_btn color">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="delivering_result_sec">
          <div className="contain">
              <div className="center_txt text-center">
                <h2>Delivering Results</h2>
                <p>Faster Times to Approval, Competitive Analytics, Regulatory Compliance, Product Innovation & more </p>
              </div>
              <div className="result_tabs flex">
                <div className="colL">
                  {delivery_result_tabs.map((val,i) => {
                    return(
                      <div className="latest_tabs" key={i}>
                        <span>{val.title}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="colR">
                  <div className="tabs_content">
                    <div className="inner_tabs_content">
                      <div className="flex">
                        <div className="tab_left">
                          <div className="image">
                            <img src="/images/tab1.webp" alt="Pharma Intelligence"/>
                          </div>
                        </div>
                        <div className="tab_right">
                          <h3>PHARMA INTELLIGENCE MODULE</h3>
                          <h5>RAPID INSIGHTS, RAPID DELIVERY</h5>
                          <p>Supercharge your pharma development and market delivery with our Pharma Intelligence Platform. Tap into the combined power of clinical trial, labeling, safety, and excipient data to boost your innovation, fast-track approvals, and skyrocket portfolio revenues.</p>
                          <p>Click below to learn how we can help your organization.</p>
                          <div className="btn_blk">
                            <Link href="" className="site_btn">Learn More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </>
  );
}
