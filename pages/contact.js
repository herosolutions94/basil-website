import React, { useState } from "react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <main>
        <section className="contact_pg p_t_b">
            <div className="contain">
                <h1 className="text-center" data-aos="fade-up" data-aos-duration="800">Get In Touch With Us</h1>
                <div className="flex" data-aos="fade-up" data-aos-duration="800">
                    <div className="colL">
                        <h4>Connect with Us!</h4>
                        <p>We’re excited to hear from you! Whether you have questions about our products, need assistance with our solutions, or just want to share your thoughts, we welcome your inquiries. Below are the details on how to reach us. Let’s start a conversation, and our friendly team will get back to you promptly.</p>
                        <ul>
                            <li>
                                <Link href="mailto:Info@BasilSystems.com">
                                    <img src="/images/email.svg" alt="" />
                                    <span>Info@BasilSystems.com</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/basilsystems/">
                                    <img src="/images/linkedin_contact.svg" alt="" />
                                    <span>https://www.linkedin.com/company/basilsystems/</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="colR">
                        <form>
                            <p>Alternatively, you can use the contact form below to get in touch with us. Please fill in the required fields and hit 'Send Message'. We aim to respond to all queries within 24 hours during business days.</p>
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