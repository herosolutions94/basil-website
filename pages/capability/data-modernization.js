import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Whitepaper from "@/components/whitepaper";
import WhitepaperForm from "@/components/whitepaper-form";

export default function DataModernization() {
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
            image:"/images/modernization_whitepaper1.png",
            title:"HARMONIZING INTERNAL DATA AND EXTERNAL DATA TO CREATE AN AI READY DATA LAKE"
        },
        {
            id:"2",
            image:"/images/modernization_whitepaper2.png",
            title:"MAKING DATA SEARCHABLE AND DRIVING SMARTER INTELLIGENCE AUGMENTED (IA) EFFICIENCY GAINS"
        },
    ]
  return (
    <>
      <main>
        <section className="capability_area_sec p_t_b">
            <div className="txt_cmn_heading">
                <h1 className="cmn_heading">Data Modernization</h1>
            </div>
            <div className="grid_capability">
                <div className="contain">
                    <div className="flex">
                        <div className="col">
                            <h2>Impactful AI begins with High Quality Data</h2>
                            <p>In today’s data-driven world, staying ahead means harnessing the power of cutting-edge technology for continuous evolution. Basil’s proprietary ML technology is engineered to autonomously transform and optimize vast volumes of accumulated data into a more accessible, usable, and actionable format, driving meaningful insights and superior business outcomes.</p>
                            <p>Our technology ensures that your business can fully leverage modern innovations, streamlining your operations and setting the stage for future advancements. With Basil Systems, empower your operations with smart technology that delivers precision, efficiency, and value at every step.</p>
                        </div>
                        <div className="col">
                            <div className="outer_blk_img">
                                <div className="image">
                                    <img src="/images/data-modernization.svg" alt="Data Modernization" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="icons_modernization">
                <div className="contain">
                    <div className="cap_txt">
                        <p>Basil Systems' Data Modernization solution transforms outdated data management systems into state-of-the-art environments through:</p>
                    </div>
                    <div className="flex">
                        <div className="col">
                            <div className="image_icon">
                                <img src="/images/data_indexing.svg" alt="Data Indexing"/>
                            </div>
                            <h4>Data Indexing</h4>
                            <p>Our advanced indexing technology enhances the accessibility and manageability of your data. By structuring your data optimally, our system ensures quick retrieval and efficient usage, boosting performance across all your business processes. This enables you to focus more on strategic initiatives rather than data management hassles.</p>
                        </div>
                        <div className="col">
                            <div className="image_icon">
                                <img src="/images/data_harmonization.svg" alt="Data Harmonization"/>
                            </div>
                            <h4>Data Harmonization</h4>
                            <p>Our technology harmonizes data across various formats and sources, creating a unified data framework that fosters seamless integration and enables more precise analysis. With everything aligned and coherent, your data becomes a more powerful tool in your decision-making arsenal.</p>
                        </div>
                        <div className="col">
                            <div className="image_icon">
                                <img src="/images/making_data.svg" alt="Making Data “AI Ready”"/>
                            </div>
                            <h4>Making Data “AI Ready”</h4>
                            <p>Basil Systems’ proprietary technology prepares your data for AI by cleaning, organizing, and optimizing it, ensuring it's ready for predictive analytics and machine learning models. This preparation allows you to capitalize fully on your AI investments, unlocking new capabilities and generating transformative insights that drive business growth.</p>
                        </div>
                    </div>

                    <div className="mini_txt_blk">
                        <p>Working with structured and unstructured data, Basil enables a scalable and flexible environment that supports diverse analytics applications and prepares your infrastructure for sophisticated data operations.</p>
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
