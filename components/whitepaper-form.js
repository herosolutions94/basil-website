import Link from "next/link";
import React, { useState } from "react";
export default function WhitepaperForm({ onClose }) {
  return (
    <>
        <div className="popup uj_popup" style={{ display: "block" }}>
          <div class="tableDv">
            <div class="tableCell">
              <div class="contain">
                <div class=" inside">
                  <div
                    className="crosBtn"
                    onClick={onClose}></div>
                  <form action="/casestudy/detail">
                    <h4>
                      Please fill out the required details below and we will
                      email you the requested study shortly.
                    </h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input className="input" placeholder="Name"></input>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input className="input" placeholder="Title"></input>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            placeholder="Company"></input>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="txtGrp">
                          <input
                            className="input"
                            placeholder="Email Address"></input>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="btn_blk">
                          <button type="submit" className="site_btn color">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
