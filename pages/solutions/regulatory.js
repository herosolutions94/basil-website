import React from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";
import Image from "next/image";

export default function regulatory() {
  const data = [
    {
      id: 1,
      image: "/images/ra3.svg",
      text: "List of devices (UDI: Unique Device Identifier) database with sample pop-up",
    },
    {
      id: 2,
      image: "/images/ra2.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
    {
      id: 3,
      image: "/images/ra1.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
    {
      id: 4,
      image: "/images/ra4.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
    {
      id: 5,
      image: "/images/ra5.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
  ];
  return (
    <div>
      <main>
        <section id="flex_banner" className="regulatory p_t_b">
          <div className="bgtext">
            <h1>Regulatory</h1>
          </div>
          <div className="contain">
            <div className="flex mt">
              <div className="colL">
                <h2>
                  Accelerating time to clearance and approvals – With
                  unparalleled regulatory insights and analytics
                </h2>
                <p>
                  The Basil Regulatory module sets a new industry standard for
                  search and discovery – when data-mining the regulatory
                  landscape to shape product development strategies, optimize
                  regulatory submissions and influence innovation with
                  unprecedented speed.
                </p>
                <div className="bTn">
                  <Link href="/contact" className="site_btn ">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="colR">
                <div className="image">
                  <Image src="/images/Reg_intel.svg" width={500} height={600} priority/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analytics">
          <div className="contain">
            <div className="content_center">
              <h2>Rich real-time data</h2>
            </div>
            <Analytics_carousel data={data} />
          </div>
        </section>

        <section id="blue_sec">
          <div className="contain">
            <div className="content_center">
              <h2>How organizations are using Basil Regulatory</h2>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="head">
                    <div className="icon">
                      <img src="/images/rico.svg" />
                    </div>
                    <h4>Regulatory strategy and discovery</h4>
                  </div>
                  <div className="text">
                    <p>
                      Gain new insights across all related products and
                      technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="head">
                    <div className="icon">
                      <img src="/images/rico2.svg" />
                    </div>
                    <h4>Due diligence and competitive intelligence</h4>
                  </div>
                  <div className="text">
                    <p>
                      Explore technology landscapes, trends and companies across
                      the industry
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="head">
                    <div className="icon">
                      <img src="/images/rico3.svg" />
                    </div>
                    <h4>Product planning and strategy</h4>
                  </div>
                  <div className="text">
                    <p>
                      Discover untapped market opportunities, track competitive
                      products and benchmark performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="two_img">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="outer">
                  <div className="image1 image">
                    <Image src="/images/r2.svg" width={300} height={500} priority />
                  </div>
                  <div className="image2 image">
                    <Image src="/images/r3.svg" width={300} height={500} priority/>
                  </div>
                </div>
              </div>
              <div className="colR">
                <h2>Basil Systems is simply revolutionary</h2>
                <p>
                  “Basil Systems is simply revolutionary. They solved the
                  long-standing problems with FDA data. We use it everyday for
                  regulatory research and strategy.”
                </p>
                <div className="mini_br"></div>
                <p>
                  <strong>VP Regulatory</strong>
                </p>
                <p> Fortune 500 medical device manufacturer</p>
                <div className="bTn">
                  <Link href="/contact" className="site_btn ">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="up_ico">
          <div className="contain">
            <div className="content_center">
              <h2>Unmatched capabilities</h2>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/ru1.svg" />
                  </div>
                  <h4>State-of-the-art big data architecture</h4>
                  <p>
                    US FDA, NIH, FOIA, Australian TGA, Health Canada &
                    MedEffect, GMDN and more
                  </p>
                  <p>Over 500,000 full clinical trial records</p>
                  <p>
                    AI/ML-powered indexing, cross referencing and error
                    correction
                  </p>
                  <p>Updated and refreshed multiple times daily</p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/ru2.svg" />
                  </div>
                  <h4>
                    State-of-tUnique, powerful featureshe-art big data
                    architecture
                  </h4>
                  <p>
                    World’s only visual interactive 510(k) predicate and
                    reference navigator
                  </p>
                  <p>Time-to-approval statistics for benchmarking </p>
                  <p>
                    Instant quality trends to assess regulatory strategy risks 
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/ru3.svg" />
                  </div>
                  <h4>Full-text natural language search</h4>
                  <p>
                    Across all records, files, documents and categories, at once
                  </p>
                  <p>
                    Explore applications, product codes, regulations, recalls,
                    adverse events and more
                  </p>
                  <p>
                    Enables true exploration and discovery that was not
                    previously possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
