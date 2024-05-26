import React from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";
import Image from "next/image";

export default function exec_dashboard() {
  const data = [
    {
      id: 1,
      image: "/images/pa1.svg",
      text: "Executive dashboard of new product clearances, approvals, clinical trials & more",
    },
    {
      id: 2,
      image: "/images/pa2.svg",
      text: "Summaries, visualizations and analytics of post-market events – updated in real-time",
    },
    {
      id: 3,
      image: "/images/pa3.svg",
      text: "Select which companies, brands and products to receive alerts on as new events happen",
    }
  ];
  return (
    <div>
      <main>
        <section id="flex_banner" className="exec p_t_b">
          <div className="bgtext">
            <h1>Exec Dashboard & Alerts</h1>
          </div>
          <div className="contain">
            <div className="flex mt">
              <div className="colL">
                <p>
                  Stay ahead in the MedTech industry with our platform that
                  delivers real-time updates on device approvals, medical
                  guidelines, and clinical trials.
                </p>
                <p>
                  Access comprehensive snapshots of the sector to enhance your
                  strategic decisions and maintain a competitive edge.
                </p>
                <p>
                  Customize alerts for key products and companies, with robust
                  tracking tools that keep you informed about advancements in
                  medical devices, patents, and emerging technologies.
                </p>
                <p>
                  Seamless oversight of all post-market activities through
                  detailed visualizations and summaries, maximizing your
                  operational efficiency and compliance.
                </p>
                <div className="bTn">
                  <Link href="/contact" className="site_btn ">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="colR">
                <div className="image">
                  <Image src="/images/ex1.svg" width={600} height={600} priority/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analytics">
          <div className="contain">
            <div className="content_center">
              <h2>Comprehensive Snapshots of Recent Activitiess</h2>
            </div>
            <Analytics_carousel data={data} />
          </div>
        </section>

        <section id="process">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image src="/images/ex2.svg" alt="" width={600} height={700} priority/>
                </div>
              </div>
              <div className="colR">
                <h2>Exec Dashboard </h2>
                <ul>
                  <li>
                    <div className="image">
                      <img src="/images/eico1.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>
                        Define custom datasets for analysis & tracking, across
                        companies, brands or tech categories:
                      </h4>
                      <p>
                        Tailor your datasets for specific analyses, spanning
                        across any combination of companies, brands, or tech
                        categories to enhance strategic oversight.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico2.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>
                        See everything and anything new at a single glance and
                        get email alerts when anything happens in your tracked
                        datasets:
                      </h4>
                      <p>
                        Quickly survey all recent updates through a succinct
                        dashboard overview and stay informed with immediate
                        email notifications for any changes in your tracked
                        areas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico3.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>
                        View trends, spot troublesome developments; compare
                        across companies, products, problem types and more:
                      </h4>
                      <p>
                        Easily monitor emerging trends, pinpoint potential
                        issues, and conduct thorough comparisons across various
                        dimensions such as companies, products, and problems to
                        sharpen your competitive edge.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img src="/images/eico4.svg" alt="" />
                    </div>
                    <div className="text">
                      <h4>
                        Set Alerts to see opportunities and take actions on new
                        events:
                      </h4>
                      <p>
                        Activate customized alerts to swiftly detect
                        opportunities and implement timely actions on emerging
                        events, ensuring you remain proactive and ahead in your
                        industry.
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
