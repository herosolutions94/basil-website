import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
export default function Header({ data }) {
  const router = useRouter();
  const path = router.pathname;

  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [solutionDrop, setSolutionDrop] = useState(false);
  const ToggleSolutionDrop = () => {
    setSolutionDrop(!solutionDrop);
  };
  const [capabilityDrop, setCapabilityDrop] = useState(false);
  const ToggleCapabilityDrop = () => {
    setCapabilityDrop(!capabilityDrop);
  };

  const [resourceDrop, setResourceDrop] = useState(false);
  const ToggleResourceDrop = () => {
    setResourceDrop(!resourceDrop);
  };

  const closeDrop = () => {
    setCapabilityDrop(false);
    setToggle(false);
  };
  const closeSolutionDrop = () => {
    setSolutionDrop(false);
    setToggle(false);
  };

  const closeResourceDrop = () => {
    setResourceDrop(false);
    setToggle(false);
  };

  return (
    <header className={data == "logged" ? "logged_header" : ""}>
      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}>
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            <li
              className={`drop ${solutionDrop ? "open" : ""}`}
              onMouseEnter={ToggleSolutionDrop}
              onMouseLeave={closeSolutionDrop}
              onClick={ToggleSolutionDrop}>
              <div className="drop_btn">Solutions</div>
              <ul className={solutionDrop ? "sub sm active" : "sub sm"}>
                <li>
                  <Link href="/data-modernization" onClick={closeSolutionDrop}>
                    Data Modernization
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`drop ${capabilityDrop ? "open" : ""}`}
              onMouseEnter={ToggleCapabilityDrop}
              onMouseLeave={closeDrop}
              onClick={ToggleCapabilityDrop}>
              <div className="drop_btn">Capability</div>
              <ul className={capabilityDrop ? "sub sm active" : "sub sm"}>
                <li>
                  <Link href="/data-modernization" onClick={closeDrop}>
                    Data Modernization
                  </Link>
                </li>
                <li>
                  <Link href="/data-intefration" onClick={closeDrop}>
                    API / Data Intefration
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`drop ${resourceDrop ? "open" : ""}`}
              onMouseEnter={ToggleResourceDrop}
              onMouseLeave={closeResourceDrop}
              onClick={ToggleResourceDrop}>
              <div className="drop_btn">Resources</div>
              <ul className={resourceDrop ? "sub sm active" : "sub sm"}>
                <li>
                  <Link href="/casestudy" onClick={closeDrop}>
                    Case studies
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDrop}>
                    Testimonials
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" onClick={ToggleAction}>
                About Us
              </Link>
            </li>
            <li className="show_cell_lnk">
              <Link href="/" className="site_btn blank">
                Schedule Demo
              </Link>
            </li>
          </ul>
        </nav>
        <div className="login_btns">
          <ul>
            <li className="btn_blk">
              <Link href="/" className="site_btn blank">
                Schedule Demo
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
