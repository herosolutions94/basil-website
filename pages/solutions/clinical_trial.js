import React from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";

export default function Clinical_trial() {
  const data = [
    {
      id: 1,
      image: "/images/cla1.svg",
      text: "List of devices (UDI: Unique Device Identifier) database with sample pop-up",
    },
    {
      id: 2,
      image: "/images/cla2.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
    {
      id: 3,
      image: "/images/cla3.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
  ];
  return (
    <div>
      <main>
        <section id="flex_banner" className="clinical p_t_b">
          <div className="bgtext">
            <h1>Clinical Trials</h1>
          </div>
          <div className="contain">
            <div className="flex mt">
              <div className="colL">
                <h2>Integrated, comprehensive access to clinical trials</h2>
                <p>
                  Quickly investigate clinical research and evidence generation
                  with extensive search tools and easy download/export
                  capabilities
                </p>
              </div>
              <div className="colR">
                <div className="outer">
                  <div className="left_col">
                    <div className="col">
                      <div className="inner">
                        <div className="head">
                          <div className="icon">
                            <img src="/images/rico.svg" />
                          </div>
                          <h4>Over 500k indexed trials and growing</h4>
                        </div>
                        <div className="text">
                          <p>
                            Fully indexed dataset enables rich access to any /
                            all clinical trials that reference any mention of a
                            medical device, IVD or blood product
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
                          <h4>Natural language, full text analysis</h4>
                        </div>
                        <div className="text">
                          <p>
                            Just like everything else on Basil’s platform,
                            search for anything and find everything related to
                            your interests. Naturally.
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
                            <img src="/images/rico3.svg" />
                          </div>
                          <h4>Comprehensive search: see everything at once</h4>
                        </div>
                        <div className="text">
                          <p>
                            Being fully connected to all regulatory and quality
                            data makes your clinical trial research
                            exponentially more insightful and helpful
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="inner">
                        <div className="head">
                          <div className="icon">
                            <img src="/images/ru4.svg" />
                          </div>
                          <h4>Pre-commercial due diligence</h4>
                        </div>
                        <div className="text">
                          <p>
                            Now you can investigate new technologies, companies,
                            and research programs in early-stage development
                            that have not cleared the FDA
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
              <h2>Comprehensive research - continuously updated</h2>
            </div>
            <Analytics_carousel data={data} />
          </div>
        </section>

        <section id="process" className="comp clinicl">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <img src="/images/clinical.jpg" alt="" />
                </div>
              </div>
              <div className="colR">
                <h2>Extracting value from Clinical Trials </h2>
                <ul>
                  <li>
                    <div className="image">
                      <img src="/images/eico1.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Maximize Impact:</h4>
                      <p>
                        Elevate your clinical trials with streamlined research
                        and enhanced controls – empowering location selection,
                        optimizing participant engagement, and advanced
                        intervention planning
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico2.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Redefine Standards:</h4>
                      <p>
                        Leap beyond traditional constraints with fully indexed,
                        easily searchable, and constantly updated trial records
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico3.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Stay Informed:</h4>
                      <p>
                        Keep a finger on the pulse with real-time updates and a
                        comprehensive tracking history of every trial
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico4.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Effortless Access and Sharing:</h4>
                      <p>
                        Quickly review and download complete data and results,
                        formatted in convenient, shareable PDFs.
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
