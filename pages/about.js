import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <main>
        {/* ===== uj_sec_about ==== */}
        <section className="uj_sec_about u_two_cols">
          <div className="contain">
            <div className="flex">
              <div className="cols col1" data-aos="fade-up" data-aos-duration="800">
                <div className="inner">
                  <div className="sec_heading">
                    <h2>About Basil Systems</h2>
                  </div>
                  <div className="sec-content">
                    <h5>
                      Streamlining life sciences research for better patient
                      outcomes.
                    </h5>
                    <p>
                      Basil Systems is dedicated to enhancing patient outcomes
                      and saving lives by optimizing the operational efficiency
                      of companies in the highly regulated healthcare industry.
                      This goal is achieved through a sophisticated big-data
                      SaaS platform powered by artificial intelligence (AI) and
                      machine learning (ML).
                    </p>
                    <p>
                      By offering essential analytics and insights, Basil
                      Systems empowers healthcare enterprises to navigate
                      regulatory complexities, accelerate research, and improve
                      the overall quality of care.
                    </p>
                  </div>
                  <div className="btn_blk">
                    <Link href="/contact" className="site_btn dark">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="cols col2" data-aos="fade-up" data-aos-duration="800">
                <div className="image">
                  <Image src="images/uj_about_1.svg" alt="" priority width={500} height={600}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== uj_sec_work ==== */}
        <section className="uj_sec_work">
          <div className="contain">
            <div className="uj_inside">
              <div className="sec_heading" data-aos="fade-up" data-aos-duration="800">
                <h2>Who we work with</h2>
              </div>
              <div className="sec_content" data-aos="fade-up" data-aos-duration="800">
                <p>
                  Basil Systems serves a diverse range of stakeholders in the
                  healthcare ecosystem by providing critical data analytics and
                  insights through its AI/ML-powered platform.
                </p>
              </div>
              <div className="flex">
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/uj_w_1.webp" alt="" width={200} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>Medical Device Companies</h5>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/uj_w_2.jpg" alt=""  width={200} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>Pharma</h5>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/uj_w_3.jpg" alt=""  width={200} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>CROs</h5>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/Insurance.jpg" alt=""  width={200} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>Insurance</h5>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/academic.jpg" alt=""  width={200} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>Academic Institutions</h5>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/uj_w_6.jpeg" alt=""  width={400} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>CMO/CDMOs</h5>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/uj_w_7.jpg" alt=""  width={200} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>Consultancies</h5>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <Image src="/images/lawfirm.jpg" alt=""  width={200} height={200}/>
                    </div>
                    <div className="lower-content">
                      <h5>Law Firms</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== uj_sec_history ==== */}
        <section className="uj_sec_history u_two_cols">
          <div className="contain">
            <div className="flex">
              <div className="cols col1" data-aos="fade-up" data-aos-duration="800">
                <div className="image">
                  <Image src="/images/uj_history.jpeg" alt=""  width={700} height={500}/>
                </div>
              </div>
              <div className="cols col2">
                <div className="inner">
                  <div className="sec_heading" data-aos="fade-up" data-aos-duration="800">
                    <h2>Our History</h2>
                  </div>
                  <div className="sec-content" data-aos="fade-up" data-aos-duration="800">
                    <p>
                      Basil Systems is dedicated to enhancing patient outcomes
                      and saving lives by optimizing the operational efficiency
                      of companies in the highly regulated healthcare industry.
                      This goal is achieved through a sophisticated big-data
                      SaaS platform powered by artificial intelligence (AI) and
                      machine learning (ML).
                    </p>
                    <p>
                      By offering essential analytics and insights, Basil
                      Systems empowers healthcare enterprises to navigate
                      regulatory complexities, accelerate research, and improve
                      the overall quality of care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== uj_sec_mission ==== */}
        <section className="uj_sec_mission">
          <div className="contain">
            <div className="uj_inside">
              <div className="flex">
                <div className="cols col1">
                  <div className="inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="sec_heading">
                      <h2>Our Mission</h2>
                    </div>
                    <div className="sec-content">
                      <p>
                        At Basil Systems, our mission is to drive transformative
                        change in the pharmaceutical industry through advanced
                        AI and ML technologies. We are dedicated to enhancing
                        data-driven decisions across life sciences to accelerate
                        commercial success and improve health outcomes. Our
                        proprietary big-data SaaS platform enables leading
                        healthcare enterprises to realize better data handling,
                        superior decision-making, and ultimately, superior
                        patient outcomes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cols col2">
                  <div className="image_area" data-aos="fade-up" data-aos-duration="800">
                    <div className="block_1">
                      <div className="image_1 image">
                        <Image src="/images/uj_m_1.jpg" alt=""  width={400} height={400}/>
                      </div>
                      <div className="image_2 image">
                        <Image src="/images/uj_m_2.jpg" alt=""  width={400} height={200}/>
                      </div>
                    </div>
                    <div className="block_1">
                      <div className="image_1 image">
                        <Image src="/images/uj_m_3.jpeg" alt=""  width={400} height={200}/>
                      </div>
                      <div className="image_2 image">
                        <img src="/images/uj_m_4.jpg" alt=""  width={400} height={400}/>
                      </div>
                    </div>
                    <div className="block_1">
                      <div className="image_1 image">
                        <Image src="/images/uj_m_5.jpeg" alt=""  width={400} height={400}/>
                      </div>
                      <div className="image_2 image">
                        <Image src="/images/uj_m_6.jpeg" alt=""  width={400} height={200}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===== uj_sec_choose ==== */}
        <section className="uj_sec_choose">
          <div className="contain">
            <div className="uj_inside">
              <div className="sec_heading" data-aos="fade-up" data-aos-duration="800">
                <h2>Why chose Basil Systems</h2>
              </div>
              <div className="sec_content" data-aos="fade-up" data-aos-duration="800">
                <p>
                  Embrace the future of data integration with Basil Systems. We
                  are dedicated to delivering high-quality, scalable solutions
                  that foster innovation and drive business success.
                </p>
              </div>
              <div className="flex">
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <img src="images/uj_c_1.png" alt="" />
                    </div>
                    <div className="lower-content">
                      <h5>Customization and Flexibility</h5>
                      <p>
                        We offer tailored solutions to meet the unique needs of
                        your business, ensuring that our integration services
                        provide maximum benefit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <img src="images/uj_c_2.png" alt="" />
                    </div>
                    <div className="lower-content">
                      <h5>Advanced Security Protocols</h5>
                      <p>
                        Protect your data during transit and at rest with
                        cutting-edge security measures that comply with
                        international standards. Your data’s security is our
                        priority.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <img src="images/uj_c_3.png" alt="" />
                    </div>
                    <div className="lower-content">
                      <h5>Expert Support</h5>
                      <p>
                        Our team of experts provides ongoing support and
                        consultations to ensure your integrations work
                        seamlessly and continue to meet your business needs as
                        they evolve.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="uj_cols">
                  <div className="uj_inner" data-aos="fade-up" data-aos-duration="800">
                    <div className="image">
                      <img src="images/uj_c_4.png" alt="" />
                    </div>
                    <div className="lower-content">
                      <h5>Efficiency and Reduced Complexity</h5>
                      <p>
                        1.We simplify complex data landscapes, making them more
                        manageable and less costly to maintain. Our solutions
                        reduce the time and effort required to manage data
                        flows.
                      </p>
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
