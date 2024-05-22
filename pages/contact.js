import React, { useState } from "react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <main>
        <section className="contact_pg">
            <div className="contain">
                <h1 className="text-center">Get In Touch With Us</h1>
                <div className="flex">
                    <div className="colL">
                        <h4>Let’s discuss on something cool together</h4>
                        <p>Suspendisse posuere nisi eu neque pharetra tristique iaculis erat tempor. Curabitur sed justo auctor sodals nunc in finibus purus donec tellus tristique iaculis erat tempor.</p>
                        <ul>
                            <li>
                                <Link href="">
                                    <img src="/images/email.svg" alt="" />
                                    <span>basil_system@gmail.com</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <img src="/images/linkedin_contact.svg" alt="" />
                                    <span>www.linkedin.com/basilsystem</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="colR">
                        <form>
                            <h4>Need Any Help?</h4>
                            <div className="txt_grp">
                                <input type="text" className="input" name="fname" placeholder="First Name"/>
                            </div>
                            <div className="txt_grp">
                                <input type="text" className="input" name="lname" placeholder="Last Name"/>
                            </div>
                            <div className="txt_grp">
                                <input type="text" className="input" name="phone" placeholder="Phone Number"/>
                            </div>
                            <div className="txt_grp">
                                <input type="text" className="input" name="email address" placeholder="Email Address"/>
                            </div>
                            <div className="txt_grp">
                                <textarea className="input" placeholder="Enter Your Message Here"></textarea>
                            </div>
                            <div className="btn_blk">
                                <button className="site_btn lg dark">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}