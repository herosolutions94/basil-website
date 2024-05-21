import Link from "next/link"
import React from 'react'
import Cta from "./cta";

export default function Footer() {
  const data = {
    solutions: [
      {
        id: "sol_1",
        text: "Pharma Intel",
        link: "/",
      },
      {
        id: "sol_2",
        text: "Regulatory Intel",
        link: "/",
      },
      {
        id: "sol_3",
        text: "Post-market (MedTech)",
        link: "/",
      },
      {
        id: "sol_4",
        text: "Executive Dashboard",
        link: "/",
      },
      {
        id: "sol_5",
        text: "CER Table Creator",
        link: "/",
      },
      {
        id: "sol_6",
        text: "Clinical Trials",
        link: "/",
      },
    ],
    capabilities: [
      {
        id: "cap_1",
        text: "Data harmonization",
        link: "/",
      },
      {
        id: "cap_2",
        text: "External API",
        link: "/",
      }
    ],
    resources: [
      {
        id: "res_1",
        text: "Case studies",
        link: "/",
      },
      {
        id: "res_2",
        text: "Citations",
        link: "/",
      },
      {
        id: "res_3",
        text: "Testimonials",
        link: "/",
      }
    ],
    about: [
      {
        id: "company",
        text: "Company",
        link: "/",
      },
      {
        id: "terms",
        text: "Terms & Conditions",
        link: "/",
      },
      {
        id: "privacy",
        text: "Privacy policy",
        link: "/",
      }
    ],
    
  }
    return (
      <>
      <section className="cta_sec">
        <div className="contain">
          <Cta />
        </div>
      </section>
      <footer>
          <div className="contain">
            <div className="flex_row main_row row">
              <div className="col-xl-5">
                <div className="in_col">
                  <div className="logo">
                      <Link href="/">
                          <img src="/images/logo.svg" alt="" />
                      </Link>
                  </div>
                  <p>Leveraging AI / ML to provide life sciences with unprecedented analytics & insights to guide data driven decisions and accelerate commercial success</p>
                  <div className="social_logon">
                    <p>Follow Us</p>
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/linkedin.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="in_col">
                  <h4>
                  Solutions
                  </h4>
                  <ul className="list">
                    {data.solutions.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="in_col">
                  <h4>
                  Capabilities
                  </h4>
                  <ul className="list">
                    {data.capabilities.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="in_col">
                  <h4>
                  Resources
                  </h4>
                  <ul className="list">
                    {data.resources.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="in_col">
                  <h4>
                  About Us
                  </h4>
                  <ul className="list">
                    {data.about.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
           
            <div className="copyright">
              <p className="text-center">
              Copyright © 2024 Basil Systems, Inc
              </p>
            </div>
          </div>
      </footer>
      </>
    )
  }