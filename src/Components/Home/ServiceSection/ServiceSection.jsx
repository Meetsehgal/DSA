import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import ASociate from "../../../assets/img/icons/Associate with DSA.png";
import subscribe from "../../../assets/img/icons/Subscribe.png";
=======
// import Asociate from "../../../assets/img/icons/Associate with DSA.png";
// import subscribe from "../../../assets/img/icons/Subscribe.png";
import Associate from  "../../../assets/img/home/home-banner/Associate with DSA.png";
import Subscribe from "../../../assets/img/home/home-banner/Subscribe.png";
>>>>>>> dev
import "./ServiceSection.css";
export default function ServiceSection() {
    return (
        <section className="section-spacing pt-0 service-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="heading-box d-flex justify-content-between ">
                            <h2 className="main-heading mb-0">
                                our <span>services</span>
                            </h2>
                            <Link to="/services">
                                View All
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 mb-5">
                        <div className="service-card">
                            <div className="image">
<<<<<<< HEAD
                                <img src={subscribe} className="img-fluid" alt="" />
=======
                                <img src={Subscribe} className="img-fluid" alt="" />
>>>>>>> dev
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
                    </div>
                    <div className="col-12 mb-5">
                        <div className="service-card">
                            <div className="image">
<<<<<<< HEAD
                                <img src={ASociate} className="img-fluid" alt="" />
=======
                                <img src={Associate} className="img-fluid" alt="" />
>>>>>>> dev
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
            </div>
        </section>
    )
}