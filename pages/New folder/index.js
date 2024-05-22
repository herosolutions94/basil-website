import React from "react";
import Link from "next/link";
import Testimonials from "@/components/testimonials";
import Source from "@/components/source";
export default function case_study() {
  const data = [
    {
      id: 1,
      image: "/images/uj_quote.svg",
      comment:
        " “People now recognise that having a good performance conversation means that something happens as a result. “With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”",
      name: "Albert Flores",
      designation: "Product Manager at Jomanar",
    },
    {
      id: 2,
      image: "/images/uj_quote.svg",
      comment:
        " “People now recognise that having a good performance conversation means that something happens as a result. “With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”",
      name: "Albert Flores",
      designation: "Product Manager at Jomanar",
    },
  ];
  const data_1 = [
    {
      id: 1,
      image: "/images/sor-1.png",
      detail:
        "Use of Recalled Devices in New Device Authorizations Under the FDA’s 510(k) Pathway and Risk of Subsequent Recalls",
    },
    {
      id: 2,
      image: "/images/sor-2.png",
      detail:
        "Post-Shock Asystole in Patients Dying Out of Hospital While Wearing a Cardioverter Defibrillator",
    },
    {
      id: 3,
      image: "/images/sor-3.png",
      detail:
        "Leadless pacemaker perforations: Clinical consequences and related device and user problems",
    },
  ];
  return (
    <>
      <main>
        <section className="uj_sec_case_1">
          <div className="contain">
            <div className="sec_heading">
              <h2>Providing Solutions to Life Science Companies</h2>
            </div>
            <div className="sec_content">
              <p>
                Explore how Basil's AI-powered platform has revolutionized the
                MedTech and Pharma landscape through impactful case studies.
              </p>
            </div>
            <div className="flex flex_row">
              <div className="uj_cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/uj_case_1.jpg" alt="" />
                    <div className="content">
                      <div className="category">
                        <p>Positive Psychology</p>
                      </div>
                      <div className="lower_content">
                        <h4>Optimizing Market Strategy with AI Insights</h4>
                        <div className="date">
                          <p>2 March, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uj_cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/uj_case_2.jpg" alt="" />
                    <div className="content">
                      <div className="category">
                        <p>Positive Psychology</p>
                      </div>
                      <div className="lower_content">
                        <h4>Accelerating Speed to Market</h4>
                        <div className="date">
                          <p>2 March, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uj_cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/uj_case_3.jpg" alt="" />
                    <div className="content">
                      <div className="category">
                        <p>Positive Psychology</p>
                      </div>
                      <div className="lower_content">
                        <h4>Enhancing Clinical Trials Efficiency</h4>
                        <div className="date">
                          <p>2 March, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uj_cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/uj_case_4.jpg" alt="" />
                    <div className="content">
                      <div className="category">
                        <p>Positive Psychology</p>
                      </div>
                      <div className="lower_content">
                        <h4>Optimizing Market Strategy with AI Insights</h4>
                        <div className="date">
                          <p>2 March, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uj_cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/uj_case_5.jpeg" alt="" />
                    <div className="content">
                      <div className="category">
                        <p>Positive Psychology</p>
                      </div>
                      <div className="lower_content">
                        <h4>Accelerating Speed to Market</h4>
                        <div className="date">
                          <p>2 March, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uj_cols">
                <div className="inner">
                  <div className="image">
                    <img src="images/uj_m_6.jpeg" alt="" />
                    <div className="content">
                      <div className="category">
                        <p>Positive Psychology</p>
                      </div>
                      <div className="lower_content">
                        <h4>Enhancing Clinical Trials Efficiency</h4>
                        <div className="date">
                          <p>2 March, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========= */}
        <section className="uj_case_2">
          <div className="contain">
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="image">
                    <img src="" alt="" />
                  </div>
                  <div className="content">
                    <div className="main_line">
                      <p>Basil System</p>
                    </div>
                    <h4>Bill Walsh leadership lessons</h4>
                    <p>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </p>
                    <div className="cta">
                      <Link href="">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========= */}
        <section className="uj_sec_source">
          <div className="contain">
            <div className="sec_heading">
              <h2>Basil as a Trusted Source</h2>
            </div>
            <div className="sec_content">
              <p>
                As a source and methodology in leading research publications
                (for example): 
              </p>
            </div>
            <Source data={data_1} />
          </div>
        </section>
        {/* ========= */}
        <section className="uj_testimonials">
          <div className="contain">
            <div className="sec_heading">
              <h2>What Our Clients Say</h2>
            </div>
            <div className="sec_content">
              <p>Our customers say Excellent</p>
            </div>
            <Testimonials data={data} />
          </div>
        </section>
      </main>
    </>
  );
}
