import React, { useState } from "react";
import Link from "next/link";
import Testimonials from "@/components/testimonials";
import Source from "@/components/source";
import Case_form from "@/components/case_form";
import Whitepaper from "@/components/whitepaper";
import WhitepaperForm from "@/components/whitepaper-form";
import Image from "next/image";
export default function case_study() {
  const [formPopup, setFormPopup] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);

    const handleFormClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };
  const white_paper = [
    {
      id: "1",
      image: "/images/integration_whitepaper1.png",
      title:
        "DELIVERING HIGH QUALITY DATA TO DRIVE INSIGHTS FOR INTERNAL COMPETITIVE INTELLIGENCE PLATFORM",
    },
    {
      id: "2",
      image: "/images/integration_whitepaper2.png",
      title:
        "UNIFIED SAFETY, LABEL AND CLINICAL TRIAL DATA TO DRIVE EFFICIENCY IN HOMEBREW PV PLATFORM",
    },
  ];
  const data = [
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
  const data_1 = [
    {
      id: 1,
      image: "/images/sor-1.png",
      detail:
        "Use of Recalled Devices in New Device Authorizations Under the FDA’s 510(k) Pathway and Risk of Subsequent Recalls",
      lnk:"/"
    },
    {
      id: 2,
      image: "/images/sor-2.png",
      detail:
        "Post-Shock Asystole in Patients Dying Out of Hospital While Wearing a Cardioverter Defibrillator",
        lnk:"/"
    },
    {
      id: 3,
      image: "/images/sor-3.png",
      detail:
        "Leadless pacemaker perforations: Clinical consequences and related device and user problems",
        lnk:"/"
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
                <div className="inner" onClick={() => setFormPopup(true)}>
                  <div className="image">
                    <Image src="/images/uj_case_1.jpg" alt="" width={600} height={400}/>
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
                <div className="inner" onClick={() => setFormPopup(true)}>
                  <div className="image">
                    <Image src="/images/uj_case_2.jpg" alt="" width={600} height={400}/>
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
                <div className="inner" onClick={() => setFormPopup(true)}>
                  <div className="image">
                    <Image src="/images/uj_case_3.jpg" alt="" width={600} height={400}/>
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
                <div className="inner" onClick={() => setFormPopup(true)}>
                  <div className="image">
                    <Image src="/images/uj_case_4.jpg" alt="" width={600} height={400}/>
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
                <div className="inner" onClick={() => setFormPopup(true)}>
                  <div className="image">
                    <Image src="/images/uj_case_5.jpeg" alt="" width={600} height={400}/>
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
                <div className="inner" onClick={() => setFormPopup(true)}>
                  <div className="image">
                    <Image src="/images/uj_m_6.jpeg" alt="" width={600} height={400}/>
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
        <section className="uj_case_2 uj_case_3">
          <div className="contain">
            <div className="sec_heading">
              <h2>Case Studies</h2>
            </div>
            <div className="sec_content">
              <p>
                Basil has worked with customers to capture real-world ROI and
                benefits in different applications
              </p>
            </div>
            <div className="sec_top">
              <p>Recent Case Studies</p>
            </div>
            <div className="flex flex_row">
              <div className="col1">
                <div className="cols">
                  <div className="inner">
                    <div className="image" onClick={() => setFormPopup(true)}>
                      <Image src="/images/uj_cs_3.jpg" alt="" width={500} height={500}/>
                    </div>
                    <div className="content">
                      <div className="main_line">
                        <p>Basil System</p>
                      </div>
                      <h4 onClick={() => setFormPopup(true)}>Reducing Time to Submission and Approval for 510(k)</h4>
                      <p>
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?
                      </p>
                      <div className="cta" onClick={() => setFormPopup(true)}>Read More </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col2">
                <div className="cols">
                  <div className="inner">
                    <div className="photo">
                      <div className="image" onClick={() => setFormPopup(true)}>
                        <Image src="/images/uj_cs_1.jpg" alt="" width={500} height={500}/>
                      </div>
                    </div>
                    <div className="content">
                      <div className="main_line">
                        <p>Basil System</p>
                      </div>
                      <h4 onClick={() => setFormPopup(true)}>Migrating to Linear 101 </h4>
                      <p>
                        Linear helps streamline software projects, sprints,
                        tasks, and bug tracking. Here’s how to get...
                      </p>
                      <div className="cta" onClick={() => setFormPopup(true)}>Read More </div>
                    </div>
                  </div>
                </div>
                <div className="cols">
                  <div className="inner">
                    <div className="photo">
                      <div className="image" onClick={() => setFormPopup(true)}>
                        <Image src="/images/uj_cs_2.jpg" alt="" width={500} height={500}/>
                      </div>
                    </div>
                    <div className="content">
                      <div className="main_line">
                        <p>Basil System</p>
                      </div>
                      <h4 onClick={() => setFormPopup(true)}>Building your API Stack</h4>
                      <p>
                        The rise of RESTful APIs has been met by a rise in tools
                        for creating, testing, and manag...
                      </p>
                      <div className="cta" onClick={() => setFormPopup(true)}>Read More </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col3">
                <div className="cols">
                  <div className="inner">
                    <div className="photo">
                      <div className="image" onClick={() => setFormPopup(true)}>
                        <Image src="/images/uj_cs_4.jpg" alt="" width={500} height={500}/>
                      </div>
                    </div>
                    <div className="content">
                      <div className="main_line">
                        <p>Basil System</p>
                      </div>
                      <h4 onClick={() => setFormPopup(true)}>The Recruitment Funnel: A Comprehensive Guide</h4>
                      <p>
                        A grid system is a design tool used to arrange content
                        on a webpage. It is a series of vertical and horizontal
                        lines that create a matrix of intersecting points, which
                        can be used to align and organize page elements. Grid
                        systems are used to create a consistent look and feel
                        across a website, and can help to make the layout more
                        visually appealing and easier to navigate.
                      </p>
                      <div className="cta" onClick={() => setFormPopup(true)}>Read More </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========= */}
        {/* <section className="uj_case_2">
          <div className="contain">
            <div className="sec_top">
              <p>All Case Studies</p>
            </div>
            <div className="flex flex_row">
              <div className="cols">
                <div className="inner">
                  <div className="image" onClick={() => setFormPopup(true)}>
                    <Image src="/images/uj_case_3.jpg" alt="" width={500} height={500}/>
                  </div>
                  <div className="content">
                    <div className="main_line">
                      <p>Basil System</p>
                    </div>
                    <h4>
                      <Link href="/casestudy/detail">
                        Bill Walsh leadership lessons
                      </Link>
                    </h4>
                    <p>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </p>
                    <div className="cta">
                      <Link href="/casestudy/detail">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image" onClick={() => setFormPopup(true)}>
                    <Image src="/images/uj_all_1.jpg" alt="" width={500} height={500}/>
                  </div>
                  <div className="content">
                    <div className="main_line">
                      <p>Basil System</p>
                    </div>
                    <h4>
                      <Link href="/casestudy/detail">PM mental models</Link>
                    </h4>
                    <p>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </p>
                    <div className="cta">
                      <Link href="/casestudy/detail">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image" onClick={() => setFormPopup(true)}>
                    <Image src="/images/uj_all_2.jpg" alt="" width={500} height={500}/>
                  </div>
                  <div className="content">
                    <div className="main_line">
                      <p>Basil System</p>
                    </div>
                    <h4>
                      <Link href="/casestudy/detail">What is Wireframing?</Link>
                    </h4>
                    <p>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </p>
                    <div className="cta">
                      <Link href="/casestudy/detail">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image" onClick={() => setFormPopup(true)}>
                    <Image src="/images/uj_all_3.jpg" alt="" width={500} height={500}/>
                  </div>
                  <div className="content">
                    <div className="main_line">
                      <p>Basil System</p>
                    </div>
                    <h4>
                      <Link href="/casestudy/detail">
                        How collaboration makes us better designers
                      </Link>
                    </h4>
                    <p>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </p>
                    <div className="cta">
                      <Link href="/casestudy/detail">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image" onClick={() => setFormPopup(true)}>
                    <Image src="/images/uj_all_4.jpg" alt="" width={500} height={500}/>
                  </div>
                  <div className="content">
                    <div className="main_line">
                      <p>Basil System</p>
                    </div>
                    <h4>
                      <Link href="/casestudy/detail">
                        Our top 10 Javascript frameworks to use
                      </Link>
                    </h4>
                    <p>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </p>
                    <div className="cta">
                      <Link href="/casestudy/detail">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="image" onClick={() => setFormPopup(true)}>
                    <Image src="/images/uj_all_5.jpg" alt="" width={500} height={500}/>
                  </div>
                  <div className="content">
                    <div className="main_line">
                      <p>Basil System</p>
                    </div>
                    <h4>
                      <Link href="/casestudy/detail">
                        Podcast: Creating a better CX Community
                      </Link>
                    </h4>
                    <p>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </p>
                    <div className="cta">
                      <Link href="/casestudy/detail">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="pagination">
              <li>
                <a href="/casestudy/detail" class="pre-nxt">
                  Previous
                </a>
              </li>
              <li>
                <a href="/casestudy/detail" class="mid active">
                  1
                </a>
              </li>
              <li>
                <a href="/casestudy/detail" class="mid">
                  2
                </a>
              </li>
              <li>
                <a href="/casestudy/detail" class="mid">
                  3
                </a>
              </li>
              <li>
                <a href="/casestudy/detail" class="mid">
                  4
                </a>
              </li>
              <li>
                <a href="/casestudy/detail" class="mid">
                  5
                </a>
              </li>
              <li>
                <a href="/casestudy/detail" class="mid">
                  6
                </a>
              </li>
              <li>
                <a href="/casestudy/detail" class="pre-nxt">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </section> */}
        {/* ========= */}
        <section className="uj_sec_source" id="citation">
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
        {/* ==== */}
        <section className="white_paper_sec">
          <div className="contain">
            <div className="heading_all">
              <h2>Whitepaper</h2>
            </div>
            <Whitepaper data = {white_paper} onFormClick={handleFormClick}/>
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
      <Case_form formPopup={formPopup} setFormPopup={setFormPopup} />
      {isFormVisible && <WhitepaperForm onClose={handleCloseForm} />}
    </>
  );
}
