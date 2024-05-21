import React from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";

export default function Pharma_Intelligence() {
  const data = [
    {
      id: 1,
      image: "/images/pa1.svg",
      caption:
        "<p>Basil Systems offers robust analytics that provide deep insights into FDA data. With detailed reports and customizable metrics, you can easily track and optimize your regulatory strategies.</p>",
    },
    { id: 2, image: "/images/pa2.svg" },
    { id: 3, image: "/images/pa3.svg" },
  ];
  return (
    <div>
      <main>
        <section id="flex_banner">
          <div className="bgtext">
            <h2>Pharma Intelligence</h2>
          </div>
          <div className="contain">
            <div className="flex mt">
              <div className="colL">
                <p>
                  Supercharge your pharma development and market delivery with
                  our Pharma Intelligence Platform. Tap into the combined power
                  of clinical trial, labeling, safety, and excipient data to
                  boost your innovation, fast-track approvals, and skyrocket
                  portfolio revenues
                </p>
                <p>
                  Access crucial, customized insights that streamline operations
                  and empower strategic, informed decisions at every turn
                </p>
                <div className="bTn">
                  <Link href="" className="site_btn lg">
                    Contact Us
                  </Link>
                  <Link href="" className="site_btn blank lg">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="colR">
                <div className="image">
                  <img src="/images/p1.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="analytics">
          <div className="contain">
            <div className="content_center">
              <h2>Comprehensive Analytics</h2>
            </div>
            <Analytics_carousel data={data} />
          </div>
        </section>
      </main>
    </div>
  );
}
