import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ASociate from "../../../assets/img/icons/Associate with DSA.png";
import subscribe from "../../../assets/img/icons/Subscribe.png";
import Image from "../../../assets/img/contact-news.png";
import "./ContactUsServiceSection.css";
export default function ContactUsServiceSection() {
    return (
        <section className="section-spacing contact-us-service-section mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 pe-lg-4">
                        <div className="text-center top-content">
                            <div className="main-heading mb-4">
                                <h2><i>DSA</i> <span>services</span></h2>
                            </div>
                            <b>Imagine if you could</b>
                            <p>
                                There are many variations of passages <br></br> of Lorem Ipsum available, but the majority
                            </p>
                            <div className="mt-4 mb-5">
                                <Link to="/services" className="theme-btn">Services</Link>
                            </div>
                        </div>
                        <div>
                            <div className="contact-service-card">
                                <div className="image">
                                    <img src={subscribe} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div className="text">
                                        <p className="name">
                                            Subscribe
                                        </p>
                                        <span className="des">
                                        DSA offers are for online and print magazine. Stay ahead with our in-depth defence and security worldwide insights! Subscribe now for exclusive online access to expert analysis and the latest updates.
                                        </span>
                                    </div>
                                    <div className="arrow-btn">
                                        <Link to="/services">
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-service-card">
                                <div className="image">
                                    <img src={ASociate} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div className="text">
                                        <p className="name">
                                        Associate with DSA
                                        </p>
                                        <span className="des">
                                        Explore opportunities to partner with us, whether as a contributor, advertiser, or collaborator. Let’s work together to advance the defence and security dialogue.
                                        </span>
                                    </div>
                                    <div className="arrow-btn">
                                        <Link to="/services">
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-4 mt-5 mt-lg-0">
                        <div className="text-center top-content">
                            <div className="main-heading mb-4">
                                <h2>Stay <span>updated with us</span></h2>
                            </div>
                            <b>Imagine if you could</b>
                            <p>
                                There are many variations of passages <br></br>of Lorem Ipsum available, but the majority
                            </p>
                            <div className="mt-4 mb-5">
                                <Link to="/newsletter" className="theme-btn">Newsletter</Link>
                            </div>
                        </div>
                        <div className="bottom-img">
                            <img src={Image} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    ) 
}