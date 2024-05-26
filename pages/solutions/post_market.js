import React from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";
import Image from "next/image";

export default function Post_market() {
  const data = [
    {
      id: 1,
      image: "/images/pm2.svg",
      text: "Post-Market Intelligence dashboard showing recent cardiovascular panel events and device design recalls",
    },
    {
      id: 2,
      image: "/images/pm5.svg",
      text: "Quickly track industry trends and spot potential problems or opportunities (Adverse event trends by product brand)",
    },
    {
      id: 3,
      image: "/images/pm4.svg",
      text: "Post-Market dashboard’s Top Ten lists (across the entire FDA medtech dataset, May 2022)",
    },
    {
      id: 4,
      image: "/images/pm3.svg",
      text: "Trends of Adverse Events and Recalls under one product code (LIT) since 2010",
    },
    {
      id: 5,
      image: "/images/pm1.svg",
      text: "Post-Market Intelligence: CER/PSUR data table generator for MDR/IVDR",
    },
  ];
  return (
    <div>
      <main>
        <section id="flex_banner" className="clinical p_t_b">
          <div className="bgtext">
            <h1>Post Market</h1>
          </div>
          <div className="contain">
            <div className="flex mt">
              <div className="colL">
                <h2>Unprecedented access to market insights</h2>
                <p>
                  Our Post-Market Intelligence (PMI) module greatly enhances
                  your visibility…
                </p>
              </div>
              <div className="colR">
                <div className="outer">
                  <div className="left_col">
                    <div className="col">
                      <div className="inner">
                        <div className="head">
                          <div className="icon">
                            <img src="/images/notification-bell.png" />
                          </div>
                          <h4>Immediate insights and alerts</h4>
                        </div>
                        <div className="text">
                          <p>
                            Stay fully informed, with immediate visibility into
                            quality issues across your industry, as they happen
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="inner">
                        <div className="head">
                          <div className="icon">
                            <img src="/images/grid.png" />
                          </div>
                          <h4>Instant data tables for MDR/IVDR</h4>
                        </div>
                        <div className="text">
                          <p>
                            Define your European reporting needs and export full
                            CER/PSUR data tables effortlessly, saving hundreds
                            of hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right_col">
                    <div className="col">
                      <div className="inner">
                        <div className="head">
                          <div className="icon">
                            <img src="/images/upload.png" />
                          </div>
                          <h4>Novel tools, extensive export</h4>
                        </div>
                        <div className="text">
                          <p>
                            Unique analytics, trend charts and comparison tools,
                            with extensive and unlimited data export options for
                            in-house and off-line analysis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="inner">
                        <div className="head">
                          <div className="icon">
                            <img src="/images/search.png" />
                          </div>
                          <h4>Rich, customizable search</h4>
                        </div>
                        <div className="text">
                          <p>
                            Build custom datasets across companies, brands or
                            product categories; save and monitor them for trends
                            and reporting
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analytics">
          <div className="contain">
            <div className="content_center">
              <h2>Uniquely actionable intelligence</h2>
            </div>
            <Analytics_carousel data={data} />
          </div>
        </section>

        <section id="process" className="comp post_market">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image src="/images/Postmarket.jpg" alt="" width={800} height={700} priority/>
                </div>
              </div>
              <div className="colR">
                <h2>Post-Market module highlights</h2>
                <ul>
                  <li>
                    <div className="image">
                      <img src="/images/eico1.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4> One-Stop Industry Analysis:</h4>
                      <p>
                        Analyze vast industry data including recalls, adverse
                        events, warning letters, inspections, and more – through
                        a single interface.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico2.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4> Customizable Data Tracking:</h4>
                      <p>
                        Tailor datasets for specialized tracking and analysis
                        across brands, technologies, and companies.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico3.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Instant Updates & Alerts:</h4>
                      <p>
                        View all updates at a glance and receive real-time email
                        alerts for changes in your tracked data.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico4.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Insightful Trend Analysis:</h4>
                      <p>
                        Identify trends, spot potential issues, and perform
                        comprehensive comparisons between companies, products
                        and problems.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/pc1.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Flexible Data Export:</h4>
                      <p>
                        Export unlimited data or download presentation-ready
                        charts for adverse events, recalls, and products.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
