import React from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";

export default function Comp_Table() {
  const data = [
    {
      id: 1,
      image: "/images/cp1.svg",
      text: "List of devices (UDI: Unique Device Identifier) database with sample pop-up",
    },
    {
      id: 2,
      image: "/images/cp2.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
    {
      id: 3,
      image: "/images/cp3.svg",
      text: "Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.",
    },
  ];
  return (
    <div>
      <main>
        <section id="flex_banner" className="regulatory p_t_b">
          <div className="bgtext">
            <h1>Comparative Table Creator</h1>
          </div>
          <div className="contain" id="up_ico">
            <div className="content_center">
              <h2>Unlock the Power of Real-Time Comparative Insights</h2>
              <p>
                For the first time ever you can quickly and easily compare the
                safety/quality data of any medical devices, products, and brands
                side-by-side
              </p>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/ru1.svg" />
                  </div>
                  <h4>Customize Your Analysis with Ease</h4>
                  <p>
                    Simply enter brand names from any manufacturer. Refine your
                    search by company, product code, or GMDN to tailor your
                    results precisely to your needs
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/ru2.svg" />
                  </div>
                  <h4>Access Comprehensive Safety Records Globally </h4>
                  <p>
                    Leverage real-time safety records from the US FDA, Australia
                    TGA, and Health Canada. Basil offers comprehensive global
                    insights, ensuring you have the most complete data at your
                    fingertips
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/ru3.svg" />
                  </div>
                  <h4>Seamless Collaboration and Reporting Tools </h4>
                  <p>
                    Effortlessly save, export, and share entire datasets or
                    curated data tables. Enhance team collaboration, simplify
                    longitudinal analysis, and streamline reporting with
                    user-friendly tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analytics">
          <div className="contain">
            <div className="content_center">
              <h2>Unlock the Power of Real-Time Comparative Insights</h2>
            </div>
            <Analytics_carousel data={data} />
          </div>
        </section>

        <section id="process" className="comp">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <img src="/images/comptable.jpg" alt="" />
                </div>
              </div>
              <div className="colR">
                <h2>Comp Tables, Details & Safety Signals  </h2>
                <ul>
                  <li>
                    <div className="image">
                      <img src="/images/eico1.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Streamline Compliance:</h4>
                      <p>
                        Specifically tailored for EU-MDR/IVDR CER/PSUR reporting
                        requirements.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico2.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Instant Data Updates:</h4>
                      <p>
                        Access real-time data with tables that automatically
                        refresh with each change.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico3.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Unique Comparative Safety Reports:</h4>
                      <p>
                        The only tool offering multi-geography safety
                        comparisons.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico4.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>Integrated Market Intelligence:</h4>
                      <p>
                        Seamlessly connected to our Post-market Intelligence
                        module for strategic insights.
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
