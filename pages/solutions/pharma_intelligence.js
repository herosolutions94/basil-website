import React, {useState} from "react";
import Link from "next/link";
import Analytics_carousel from "@/components/analytic_carousel";
import Whitepaper from "@/components/whitepaper";
import WhitepaperForm from "@/components/whitepaper-form";
import Image from "next/image";

export default function Pharma_Intelligence() {
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
  const data = [
    {
      id: 6,
      image: "/images/pa6.svg",
      text: "Discover key insights with our comparative analytics, showcasing the variance of reported adverse events across different drug brands.",
    },
    {
      id: 7,
      image: "/images/pa7.svg",
      text: "Review all registered clinical trials for drugs / active ingredients – and quickly search within, view results, and more.",
    },
    {
      id: 1,
      image: "/images/pa1.svg",
      text: "Whether grammatical or substantial, identify every change ever made to every label for any drug – by label section.",
    },
    {
      id: 3,
      image: "/images/pa3.svg",
      text: "No change too big or too small – every modification in the history of a drug label is highlighted and searchable.",
    },
    
  ];
  return (
    <div>
      <main>
        <section id="flex_banner" className="p_t_b">
          <div className="bgtext">
            <h1>Pharma Intelligence</h1>
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
                  <Link href="/contact" className="site_btn ">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="colR">
                <div className="image">
                  <Image src="/images/p1.svg" width={600} height={700} priority/>
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

        <section id="help">
          <div className="contain">
            <div className="content_center">
              <h2>How we can help?</h2>
            </div>
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image src="/images/h1.svg" width={600} height={600}/>
                </div>
              </div>
              <div className="colR">
                <h2>Accelerate Innovation in Drug Development</h2>
                <p>
                  Harness the integrated power of clinical trial, labeling,
                  safety, and excipient data to drive your pharma innovations
                  forward. Our AI-powered platforms serve as a foundation for
                  developing breakthrough therapies and streamlining regulatory
                  approvals
                </p>
                <div class="btn_blk">
                  <Link class="site_btn color" href="/contact">
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flx2">
              <div className="colL">
                <div className="image">
                  <Image src="/images/h2.svg" width={600} height={600}/>
                </div>
              </div>
              <div className="colR">
                <h2>Enhance Market Entry and Compliance Strategies</h2>
                <p>
                  Leverage advanced data integration to proactively adapt to
                  market and regulatory demands. Our data solutions help you
                  foresee market shifts and comply with regulations, ensuring
                  your products not only reach the market faster but also
                  sustain compliance.
                </p>
                <div class="btn_blk">
                  <Link class="site_btn color" href="/contact">
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image src="/images/h3.svg" width={600} height={600}/>
                </div>
              </div>
              <div className="colR">
                <h2>Optimize Portfolio Management and Revenue Growth</h2>
                <p>
                  Access a comprehensive source of vital data covering market
                  trends, safety reports, and patient outcomes. Utilize our
                  analytical tools to effectively manage and expand your
                  portfolio, identifying profitable opportunities and maximizing
                  revenue from both existing and future products.
                </p>
                <div class="btn_blk">
                  <Link class="site_btn color" href="/contact">
                    Book a Demo
                  </Link>
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
    </div>
  );
}
