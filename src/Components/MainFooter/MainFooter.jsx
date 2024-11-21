import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaMapLocationDot, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

import TopImg from "../../assets/img/footer-bg.png";
import Icon1 from "../../assets/img/icons/call.png";
import Icon2 from "../../assets/img/icons/Email.png";
import Icon3 from "../../assets/img/icons/Address.png";
// import Logo from "../../assets/img/logo/dsa-white-logo.png";
import Logo1 from "../../assets/img/logo/DSA logo black 1.png";
import whatsApp from  "../../assets/img/icons/WhatsApp.png";
import "./MainFooter.css";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";
export default function MainFooter() {
    return (
        <>
            <section className="section-spacing pt-lg-0 main-footer">
                <img src={TopImg} className="img-fluid top-img" alt="" />
                <div className="container-fluid position-relative">
                    <div className="row">
                        <div className="col-lg-4 font-size">
                            <img src={Logo1} className="img-fluid" alt="" />
                            <p>From the house of <b>OCEAN MEDIA PRIVATE LIMITED</b></p>
                            <p className="mt-2 mb-4">(A Group company of Prabhat Prakashan Pvt. Ltd.) An ISO 9001:2015 Certified Company</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                            <ul className="sm-links">
                                <SocialIcons/>
                            </ul>
                        </div>
                        <div className="col-lg-8 footer-links ps-lg-5 mt-lg-3">
                            <div className="row">
                                <div className="col-lg-5 ps-lg-4">
                                    <h4>
                                        Contact Info
                                    </h4>
                                    <ul>
                                        <li className="mb-4">
                                            <div className="icon">
                                                <img src={Icon1} className="img-fluid" alt="" />
                                            </div>
                                            <div>
                                                <p>Loading for communication</p>
                                                <a href="tel:+91-11-41634999">+91-11-41634999</a>,<br /><a href="tel:+91-11-23268999"> 23268999, </a>
                                                <a href="tel:+919958382999">                                                     
                                                        <img src={whatsApp} className="img-fluid whatsAppIcon" alt="" />
                                                  9958382999</a>
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="icon">
                                                <img src={Icon2} className="img-fluid" alt="" />
                                            </div>
                                            <div>
                                                <p>Write us Email</p>
                                                <a href="mailto:info@dsalert.org">info@dsalert.org</a>
                                            </div>
                                        </li>
                                        <li className="mb-4">
                                            <div className="icon">
                                                <img src={Icon3} className="img-fluid" alt="" />
                                            </div>
                                            <div>
                                                <p>Visit Our location</p>
                                                <a href="http://" target="_blank" rel="noopener noreferrer"><p>prabhat prakashan tower</p>
                                                    4/19, Asaf ali road, new Delhi, India</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 ps-lg-5">
                                    <h4>
                                        Quick Links
                                    </h4>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/newsletter-alert-page">
                                                Latest Issues
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/newsletter-alert-page">
                                                News & Analysis
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                Expert Views
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/podcast-and-events">
                                                Events
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3">
                                    <h4>
                                        Resources
                                    </h4>
                                    <ul>
                                        <li>
                                            <Link to="">
                                                Narrate Your Thoughts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Become a Contributor
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services">
                                                Subscribe
                                                                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services">
                                                Associate With DSA
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                FAQ's
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                User Terms
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spacing py-3 copyright-section">
                <div className="container-fluid position-relative">
                    <div className="row">
                        <div className="col-lg-6">
                            Copyright © 2024 DSA - Defence and Security Alert Magazine
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            Brought by <a href="https://www.oceanmedia.in/" target="_blank" rel="noopener noreferrer">Ocean Media Pvt. Ltd.</a> ( A Group company of Prabhat Prakashan Pvt. Ltd.)
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}