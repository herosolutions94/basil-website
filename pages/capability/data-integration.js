import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Whitepaper from "@/components/whitepaper";
import WhitepaperForm from "@/components/whitepaper-form";
import Image from "next/image";

export default function DataIntegration() {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleFormClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };
    const white_paper = [
        {
            id:"1",
            image:"/images/integration_whitepaper1.png",
            title:"DELIVERING HIGH QUALITY DATA TO DRIVE INSIGHTS FOR INTERNAL COMPETITIVE INTELLIGENCE PLATFORM"
        },
        {
            id:"2",
            image:"/images/integration_whitepaper2.png",
            title:"UNIFIED SAFETY, LABEL AND CLINICAL TRIAL DATA TO DRIVE EFFICIENCY IN HOMEBREW PV PLATFORM"
        },
    ]
  return (
    <>
      <main>
        <section className="capability_area_sec p_t_b">
            <div className="txt_cmn_heading">
                <h1 className="cmn_heading">API / Data Integration</h1>
            </div>
            <div className="grid_capability">
                <div className="contain">
                    <div className="flex revers_flex">
                        <div className="col">
                            <div className="outer_blk_img">
                                <div className="image">
                                    <Image src="/images/data-integration.svg" alt="API / Data Integration" width={700} height={1000} priority/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h2>Augment internal data with Basil’s data</h2>
                            <h5>Basil’s comprehensive data can be accessed via SaaS or It can be delivered and integrated with your proprietary data</h5>
                            <p>Transform your enterprise landscape with Basil Systems' revolutionary API and Data Integration technology, specifically engineered to catapult your business into a new era of connectivity and intelligence. Our state-of-the-art integration tools seamlessly bridge the gap between disparate systems and turbocharge your data flows. This transformation turns complex data ecosystems into streamlined powerhouses of efficiency and innovation, allowing you to unlock the full potential of your digital assets and propel your operations to unprecedented heights.</p>
                            <p>Our technology ensures that every piece of data across your organization works in perfect harmony, driving success and enabling you to outperform competitors. Embrace this game-changing opportunity with Basil Systems and lead the revolution in data integration, redefining what's possible in your industry.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="icons_modernization">
                <div className="contain">
                    <div className="cap_txt data_integration_cap_text">
                        <h2>How we can help</h2>
                    </div>
                    <div className="flex data_integration_flex">
                        <div className="col">
                            <div className="inner">
                                <div className="image_icon">
                                    <img src="/images/api_development.svg" alt="API Development and Management"/>
                                </div>
                                <h4>API Development and Management</h4>
                                <p>Our technology-driven API solutions create custom APIs tailored to ensure flexible, secure, and efficient interactions across your diverse software platforms. These APIs enhance connectivity, streamline operations, and support real-time data exchange, optimizing the flow of information and functionality throughout your organization.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="image_icon">
                                    <img src="/images/system_interoperability.svg" alt="System Interoperability"/>
                                </div>
                                <h4>System Interoperability</h4>
                                <p>Basil Systems’ technology ensures your systems communicate effortlessly with each other. By developing advanced interfaces and protocols, we enhance system interoperability, significantly reducing data silos and improving overall access to information. This seamless connectivity facilitates more integrated and efficient operations.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="image_icon">
                                    <img src="/images/data_consolidation.svg" alt="Data Consolidation"/>
                                </div>
                                <h4>Data Consolidation</h4>
                                <p>Our technology enables the integration of data from various sources into a unified system, dramatically simplifying the complexities of data management and analysis. We streamline the consolidation process to provide a single source of truth, significantly elevating data quality and enhancing decision-making capabilities within your organization.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inner">
                                <div className="image_icon">
                                    <img src="/images/scalable_integration.svg" alt="Scalable Integration Architectures"/>
                                </div>
                                <h4>Scalable Integration Architectures</h4>
                                <p>Our technology enables the integration of data from various sources into a unified system, dramatically simplifying the complexities of data management and analysis. We streamline the consolidation process to provide a single source of truth, significantly elevating data quality and enhancing decision-making capabilities within your organization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="white_paper_sec">
            <div className="contain">
                <div className="heading_all">
                    <h2>Whitepaper</h2>
                </div>
                <Whitepaper data = {white_paper} onFormClick={handleFormClick}/>
            </div>
        </section>
      </main>
      {isFormVisible && <WhitepaperForm onClose={handleCloseForm} />}
    </>
  );
}
