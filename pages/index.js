import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Slider from 'react-slick';
import PharmaIntellibence from "../components/tab-solutions-sections/pharma-intelligence";
import Regulatory from "../components/tab-solutions-sections/regulatory";
import PostMarket from "../components/tab-solutions-sections/post_market";
import ClinicalTrials from "../components/tab-solutions-sections/clinical_trials";
import ExecDashboard from "../components/tab-solutions-sections/exec_dashboard";
import ComparativeTableCreator from "../components/tab-solutions-sections/comparative_table_creator";
import DataModernization from "../components/tab-solutions-sections/data_modernization";
import DataIntegration from "../components/tab-solutions-sections/data_integration";
import Inform from "../components/quality-insights/inform";
import Harmonize from "../components/quality-insights/harmonize";
import Integrate from "../components/quality-insights/integrate";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const[tab , setTab] = useState(1);
  const[tabQuality , setTabQuality] = useState(9);
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
    autoplaySpeed: 2000,
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
          slidesToShow: 3,
        }
      }
    ]
  };

  const trusted = [
    
    {
      image:"/images/JNJ.svg"
    },
    {
      image:"/images/Boston_Scientific.svg"
    },
    {
      image:"/images/bayer.svg"
    },
    {
      image:"/images/Bausch.svg"
    },
    {
      image:"/images/Medtronic.svg"
    },
    {
      image:"/images/Siemens.svg"
    },
    {
      image:"/images/avanos.svg"
    },
    {
      image:"/images/MeritMedical.svg"
    },
    {
      image:"/images/InariLogo.svg"
    },
    {
      image:"/images/Phillips.svg"
    },
    {
      image:"/images/Zoll.svg"
    },
    {
      image:"/images/RQM.svg"
    },
    {
      image:"/images/3M.svg"
    }
    
    
  ]
  const delivery_result_tabs = [
    {
      id:"1",
      title:"Pharma Intelligence",
    },
    {
      id:"2",
      title:"Regulatory (MedTech)",
    },
    {
      id:"3",
      title:"Post-market (MedTech)",
    },
    {
      id:"4",
      title:"Clinical Trials",
    },
    {
      id:"5",
      title:"Exec Dashboard",
    },
    {
      id:"6",
      title:"Comparative Table Creator",
    },
    {
      id:"7",
      title:"Data Modernization",
    },
    {
      id:"8",
      title:"API / Data Integration",
    },
  ]
  const solutions = {
    pharma_intelligence: {
      image:"/images/tab1.webp",
      heading:"PHARMA INTELLIGENCE MODULE",
      sub_heading:"RAPID INSIGHTS, RAPID DELIVERY",
      pera:"<p>Supercharge your pharma development and market delivery with our Pharma Intelligence Platform. Tap into the combined power of clinical trial, labeling, safety, and excipient data to boost your innovation, fast-track approvals, and skyrocket portfolio revenues.</p><p>Click below to learn how we can help your organization.</p>",
      button_lbl:"Learn More",
      link:"/solutions/pharma_intelligence"
    },
    regulatory: {
      image:"/images/tab2.png",
      heading:"MEDTECH REGULATORY MODULE",
      sub_heading:"ACCELERATE, NAVIGATE, INNOVATE, LEAD",
      pera:"<p>Harness the power of Basil Regulatory to accelerate your regulatory discovery and strategy, refine product planning, and gain competitive intelligence, all while navigating the regulatory landscape with unprecedented speed and accuracy.</p><p>Experience the future of MedTech with a taste of our platform — start with our free plan and discover how our solutions can transform your operations.</p>",
      button_lbl:"Activate Freemium",
      link:"/solutions/regulatory"
    },
    post_market: {
      image:"/images/tab3.png",
      heading:"POST-MARKET (MEDTECH) MODULE",
      sub_heading:"TRANSFORM INSIGHTS INTO ADVANTAGE",
      pera:"<p>Unlock real-time insights and customizable data tools with our Post-Market Intelligence module to revolutionize your industry visibility. Gain instant MDR/IVDR data tables, extensive export options, and powerful search capabilities to streamline trend monitoring and reporting effortlessly.</p><p>Click below to learn how we can help your organization.</p>",
      button_lbl:"Learn More",
      link:"/solutions/post_market"
    },
    clinical_trials: {
      image:"/images/tab4.png",
      heading:"CLINICAL TRIALS (MEDTECH) MODULE",
      sub_heading:"UNLOCK COMPREHENSIVE CLINICAL INSIGHTS",
      pera:"<p>Gain unparalleled access to over 500k indexed clinical trials with comprehensive search capabilities, natural language full text analysis, and extensive regulatory data connections. Perform thorough pre-commercial due diligence on new technologies and early-stage research programs not yet FDA-cleared.</p><p>Click below to learn how we can help your organization.</p>",
      button_lbl:"Learn More",
      link:"/solutions/clinical_trial"
    },
    exec_dashboard: {
      image:"/images/tab5.png",
      heading:"EXEC DASHBOARD (MEDTECH) MODULE",
      sub_heading:"DOMINATE STRATEGY WITH INSIGHTS",
      pera:"<p>Revolutionize your strategy with our executive dashboard, combining regulatory, clinical trials, and post-market intelligence into a streamlined, intuitive interface. Gain real-time alerts and actionable insights to master product monitoring, commercial strategy, launch planning, and competitor analysis effortlessly.</p><p>Click below to learn how we can help your organization.</p>",
      button_lbl:"Learn More",
      link:"/solutions/exec_dashboard"
    },
    comparative_table_creator: {
      image:"/images/tab6.png",
      heading:"COMPARATIVE TABLE CREATOR",
      sub_heading:"INSTANT SAFETY DATA INSIGHTS",
      pera:"<p>Gain real-time insights into complex emerging safety signals with our cutting-edge platform, allowing you to easily compare the safety and quality data of any medical device, product, or brand side-by-side. Effortlessly select products, access global safety records, and save, export, and share data to streamline your team's analysis and reporting.</p><p>Click below to learn how we can help your organization.</p>",
      button_lbl:"Learn More",
      link:"/solutions/com_table"
    },
    data_modernization: {
      image:"/images/tab7.png",
      heading:"DATA MODERNIZATION SOLUTION",
      sub_heading:"AUTONOMOUS DATA, TRANSFORMATION POWER",
      pera:"<p>Stay ahead in today's data-driven world with Basil’s proprietary ML technology, designed to autonomously transform vast data into actionable insights for superior business outcomes. Empower your operations with Basil Systems, streamlining processes and unlocking precision, efficiency, and value at every step.</p><p>Click below to learn how we can help your organization.</p>",
      button_lbl:"Learn More",
      link:"/capability/data-modernization"
    },
    data_integration: {
      image:"/images/tab8.png",
      heading:"API / DATA INTEGRATION SOLUTION",
      sub_heading:"REVOLUTIONIZE CONNECTIVITY AND INTELLIGENCE",
      pera:"<p>Transform your enterprise with Basil Systems' revolutionary API and Data Integration technology, seamlessly bridging disparate systems and turbocharging data flows. Unlock your digital assets' full potential, driving efficiency and innovation to outperform competitors and redefine industry standards.</p><p>Click below to learn how we can help your organization.</p>",
      button_lbl:"Learn More",
      link:"/capability/data-integration"
    },
  }
  const quality_insights = {
    inform : {
      image:"/images/inisghts.webp",
      heading:"Efficiency and Insight at Your Fingertips",
      pera:"<p>Unlock the full potential of industry data with Basil Systems' cutting-edge platform.  Designed for life sciences, our platform empowers Pharma and MedTech professionals to access, analyze, and visualize high-quality, disparate data.  Make informed decisions with ease and speed, achieving powerful insights that drive your business forward.</p>"
    },
    harmonize:{
      image:"/images/harmonize.webp",
      heading:"Revolutionary AI / ML Implementation",
      pera:"<p>Harness the power of Basil Systems' proprietary AI and ML tools to index your internal datasets.  Experience the pinnacle of data harmonization across your legacy and disparate systems.  Our sophisticated algorithms and ontologies are crafted to synchronize and elevate your internal data quality, ensuring you're working with the most accurate and actionable information.</p>"
    },
    integrate:{
      image:"/images/integrate.webp",
      heading:"Powerful Data Integrationp",
      pera:"<p>Combine Basil’s comprehensive indexed industry with your own proprietary internal data.  We offer multiple options to merge our advanced data solutions into your existing infrastructure, tailoring everything to align with your specific ontologies. The result? A unified, coherent data ecosystem that propels your workflows and analytics</p>"
    }
  }
  const feature_posts = [
    {
        id:"post1",
        image:"/images/case1.jpeg",
        title:"Optimizing Market Strategy with AI Insights",
        category:"Positive Psychology",
        date:"2 March, 2024"
    },
    {
        id:"post2",
        image:"/images/case2.jpeg",
        title:"Accelerating Speed to Market",
        category:"Positive Psychology",
        date:"2 March, 2024"
    },
    {
        id:"post3",
        image:"/images/case3.jpg",
        title:"Enhancing Clinical Trials Efficiency",
        category:"Positive Psychology",
        date:"2 March, 2024"
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
            <div className="flex">
              <h3>Trusted By</h3>
              <div className="slide_side">
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
            </div>
          </div>
        </section>
        <section className="insights_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image src="/images/rapid_insights.webp" alt="rapid insights" width={500} height={300}/>
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
                      <div className={tab == val.id ? "latest_tabs active" : "latest_tabs"} key={i} onClick={() => setTab(val.id)}>
                        <span>{val.title}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="colR">
                  <div className="tabs_content">
                  {/* <AnimatePresence mode="wait">
                    {tab == 1 && (
                      <motion.div
                        key={1}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <PharmaIntellibence data={solutions.pharma_intelligence} />
                      </motion.div>
                    )}
                    {tab == 2 && (
                      <motion.div
                        key={2}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Regulatory data={solutions.regulatory} />
                      </motion.div>
                    )}
                    {tab == 3 && (
                      <motion.div
                        key={3}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <PostMarket data={solutions.post_market} />
                      </motion.div>
                    )}
                    {tab == 4 && (
                      <motion.div
                        key={4}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ClinicalTrials data={solutions.clinical_trials} />
                      </motion.div>
                    )}
                    {tab == 5 && (
                      <motion.div
                        key={5}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExecDashboard data={solutions.exec_dashboard} />
                      </motion.div>
                    )}
                    {tab == 6 && (
                      <motion.div
                        key={6}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ComparativeTableCreator data={solutions.comparative_table_creator} />
                      </motion.div>
                    )}
                    {tab == 7 && (
                      <motion.div
                        key={7}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DataModernization data={solutions.data_modernization} />
                      </motion.div>
                    )}
                    {tab == 8 && (
                      <motion.div
                        key={8}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <DataIntegration data={solutions.data_integration} />
                      </motion.div>
                    )}
                  </AnimatePresence> */}
                    <div className={tab == 1 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "3%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "-3%" }}
                          transition={{ duration: 0.3 }}
                        >
                          <PharmaIntellibence data={solutions.pharma_intelligence} />
                        </motion.div>
                    </div>
                    <div className={tab == 2 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "3%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "-3%" }}
                          transition={{ duration: 0.3 }}
                        >
                          <Regulatory data={solutions.regulatory} />
                        </motion.div>
                    </div>
                    <div className={tab == 3 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "3%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "-3%" }}
                          transition={{ duration: 0.3 }}
                        >
                          <PostMarket data={solutions.post_market} />
                        </motion.div>
                    </div>
                    <div className={tab == 4 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                         key="modal"
                         initial={{ opacity: 0, y: "3%" }}
                         whileInView={{ opacity: 1, y: "0%" }}
                         viewport={{ once: false }}
                         exit={{ opacity: 0, y: "-3%" }}
                         transition={{ duration: 0.3 }}
                        >
                          <ClinicalTrials data={solutions.clinical_trials} />
                        </motion.div>
                    </div>
                    <div className={tab == 5 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "3%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "-3%" }}
                          transition={{ duration: 0.3 }}
                        >
                          <ExecDashboard data={solutions.exec_dashboard} />
                        </motion.div>
                    </div>
                    <div className={tab == 6 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "3%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "-3%" }}
                          transition={{ duration: 0.3 }}
                        >
                          <ComparativeTableCreator data={solutions.comparative_table_creator} />
                        </motion.div>
                    </div>
                    <div className={tab == 7 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "3%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "-3%" }}
                          transition={{ duration: 0.3 }}
                        >
                          <DataModernization data={solutions.data_modernization} />
                        </motion.div>
                    </div>
                    <div className={tab == 8 ? "not_show tab_show_current" : "not_show"}>
                        <motion.div
                          key="modal"
                          initial={{ opacity: 0, y: "3%" }}
                          whileInView={{ opacity: 1, y: "0%" }}
                          viewport={{ once: false }}
                          exit={{ opacity: 0, y: "-3%" }}
                          transition={{ duration: 0.3 }}
                        >
                          <DataIntegration data={solutions.data_integration} />
                        </motion.div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="quality_insight_sec">
          <div className="contain">
            <div className="center_txt text-center">
              <h2>Quality Data Insights & Analytics</h2>
              <p>Transforming your Data into Decisions</p>
            </div>
            <div className="quality_tabs">
              <div className={tabQuality == 9 ? "latest_tabs color_tabs active" : "latest_tabs color_tabs"} onClick={() => setTabQuality(9)}>
                <span>Inform</span>
              </div>
              <div className={tabQuality == 10 ? "latest_tabs color_tabs active" : "latest_tabs color_tabs"} onClick={() => setTabQuality(10)}>
                <span>Harmonize</span>
              </div>
              <div className={tabQuality == 11 ? "latest_tabs color_tabs active" : "latest_tabs color_tabs"} onClick={() => setTabQuality(11)}>
                <span>Integrate</span>
              </div>
            </div>
            <div className="tabs_content">
                <div className={tabQuality == 9 ? "not_show tab_show_current" : "not_show"}>
                  <motion.div
                    key="modal"
                    initial={{ opacity: 0, y: "3%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    viewport={{ once: false }}
                    exit={{ opacity: 0, y: "-3%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Inform data={quality_insights.inform} />
                  </motion.div>
                </div>
                <div className={tabQuality == 10 ? "not_show tab_show_current" : "not_show"}>
                  <motion.div
                    key="modal"
                    initial={{ opacity: 0, y: "3%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    viewport={{ once: false }}
                    exit={{ opacity: 0, y: "-3%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Harmonize data={quality_insights.harmonize} />
                  </motion.div>
                </div>
                <div className={tabQuality == 11 ? "not_show tab_show_current" : "not_show"}>
                  <motion.div
                    kkey="modal"
                    initial={{ opacity: 0, y: "3%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    viewport={{ once: false }}
                    exit={{ opacity: 0, y: "-3%" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Integrate data={quality_insights.integrate} />
                  </motion.div>
                </div>
            </div>
          </div>
        </section>
        <section className="big_cta">
          <div className="contain">
            <div className="cta_blk">
                <div className="txt">
                  <h2>Transform Your MedTech and Pharma Operations with AI-Powered Insights</h2>
                  <p>Discover how Basil's cutting-edge platform can revolutionize your approach to healthcare innovation. Harness the power of AI to gain deep market and clinical intelligence, streamline your decision-making processes, and stay ahead of the competition. Ready to experience the future of healthcare technology? Get started today!</p>
                  <div className="btn_blk">
                    <Link href="" className="site_btn dim">Schedule Demo</Link>
                  </div>
                </div>
                <div className="img_side">
                  <div className="image">
                    <img src="/images/ai_shape.svg" alt="" />
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="feature_case_study">
          <div className="contain">
              <div className="text_head_flex">
                <div className="content_text">
                  <h2>Unlock Success Stories: Real-World Results with Basil</h2>
                  <p>Explore how Basil's AI-powered platform has revolutionized the MedTech and Pharma landscape through impactful case studies.</p>
                </div>
                <div className="btn_blk">
                  <Link href="/casestudy" className="site_btn dark">View All</Link>
                </div>
              </div>
              <div className="featured_blog">
                  <div className="flex">
                      {
                          feature_posts.map((val)=>{
                              return(
                                  <div className="_col" key={val.id}>
                                      <div className="inner"><Link href="/casestudy/detail"></Link>
                                          <div className="image">
                                              <Image src={val.image} alt={val.title} width={600} height={400}/>
                                          </div>
                                          <div className="cntnt">
                                              <div className="category">{val.category}</div>
                                              <h4>{val.title}</h4>
                                              <div className="date">{val.date}</div>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                      }
                  </div>
              </div>
          </div>
        </section>
      </main>
</>
);
}
