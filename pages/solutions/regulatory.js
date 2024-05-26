import React from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";
import Image from "next/image";

export default function regulatory() {
  const data = [
    {
      id: 1,
      image: "/images/regulatory_screen1.svg",
      text: "Search results",
    },
    {
      id: 2,
      image: "/images/regulatory_screen2.svg",
      text: "510(k) visual interactive ecosystem",
    },
    {
      id: 3,
      image: "/images/regulatory_screen3.svg",
      text: "Review time statistics",
    },
    {
      id: 4,
      image: "/images/regulatory_screen4.svg",
      text: "List of devices (UDI: Unique Device Identifier) database with sample pop-up",
    },
    {
      id: 5,
      image: "/images/regulatory_screen5.svg",
      text: "PMA Supplements by Time and Type",
    },
  ];

  const testi = [
    {
      id: 1,
      image: "/images/uj_quote.svg",
      comment:
        " Basil is fantastic. The Ecosystem is a tremendous time-saver and insight generator. It provides me with a landscape I can effortlessly navigate, allowing me to assess related technologies whenever I discover something intriguing.",
      name: "VP, Regulatory Affairs",
      designation: "Boston Scientific",
    },
    {
      id: 2,
      image: "/images/uj_quote.svg",
      comment:"It's amazing!  You did that in like 2 seconds. I just spent probably a whole week trying to find and filter through this data. That just saved me weeks worth of scouring data and its even more complete and accurate.",
      name: "Sr. Regulatory Affairs Specialist",
      designation: "Bayer",
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

        <section id="up_ico" className="p_t_y">
          <div className="contain">
            <div className="content_center">
              <h2>Unmatched capabilities</h2>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/big-data.png" />
                  </div>
                  <h4>State-of-the-art big data architecture</h4>
                  <p>
                  US FDA, NIH, FOIA, Australian TGA, Health Canada & MedEffect, GMDN and more
                  </p>
                  <p>Over 500,000 full clinical trial records</p>
                  <p>
                  AI/ML-powered indexing, cross referencing and error correction
                  </p>
                  <p>Updated and refreshed multiple times daily</p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/analytics.png" />
                  </div>
                  <h4>
                  Full-text natural language search
                  </h4>
                  <p>
                  Across all records, files, documents and categories, at once
                  </p>
                  <p>Explore applications, product codes, regulations, recalls, adverse events and more</p>
                  <p>
                  Enables true exploration and discovery that was not previously possible
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/interest-rate.png" />
                  </div>
                  <h4>Unique, powerful features</h4>
                  <p>
                  World’s only visual interactive 510(k) predicate and reference navigator
                  </p>
                  <p>
                  Time-to-approval statistics for benchmarking 
                  </p>
                  <p>
                  Instant quality trends to assess regulatory strategy risks 
                  </p>
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
      </main>
    </div>
  );
}
