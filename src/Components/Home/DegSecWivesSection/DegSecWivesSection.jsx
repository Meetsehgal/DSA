import { Link } from "react-router-dom";
import Image1 from "../../../assets/img/defsecwives/18.webp";
import Image2 from "../../../assets/img/defsecwives/19.jpg";
import Image3 from "../../../assets/img/defsecwives/20.webp";
import Image4 from "../../../assets/img/defsecwives/21.jpg";
import Image5 from "../../../assets/img/defsecwives/22.jpg";
import Image6 from "../../../assets/img/defsecwives/23.webp";
import "./DegSecWivesSection.css";
export default function DegSecWivesSection() {
    return (
        <section className="section-spacing deg-sec-wives-section">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 text-center mb-3">
                        <div className="main-heading">
                            <h2>
                                Def-sec <span>wives</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="top-section">
                            <div className="image-section">

                                <div className="image">
                                    <img src={Image2} className="img-fluid" alt="" />
                                    <div className="bottom-text">
                                        <h5>
                                            creativity
                                        </h5>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src={Image3} className="img-fluid" alt="" />
                                    <div className="bottom-text">
                                        <h5>
                                            creativity
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <p>
                            The wives of our defense and security personnel play a crucial role in enhancing our national security. As a quiet yet powerful force, they manage their families and homes while their partners serve on the front lines, ensuring a stable environment that allows their loved ones to focus on their important duties.
                            </p>
                        </div>
                        <div className="bottom-section">
                            <img src={Image1} className="img-fluid" alt="" />
                            <div className="content">
                                <h4>
                                    hobbies
                                </h4>
                                <p>
                                    learn career opportunities with DSA learn career opportunities with DSA learn career opportunities with DSA
                                </p>
                            </div>  
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="d-flex flex-column h-100 justify-content-between">
                            <div>
                                <div className="top-heading">
                                    <h3>PERSONAL EXPERIENCE</h3>
                                    <p>learn career opportunities with DSA learn career opportunities with DSA learn career opportunities with DSA</p>
                                </div>
                                <div className="personal-card">
                                    <div className="image">
                                        <img src={Image5} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            PERSON 1
                                        </h4>
                                        <p>Enhance your knowledge with our curated educational resources, designed for students, </p>
                                    </div>
                                </div>
                                <div className="personal-card">
                                    <div className="image">
                                        <img src={Image6} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            PERSON 1
                                        </h4>
                                        <p>Enhance your knowledge with our curated educational resources, designed for students, </p>
                                    </div>
                                </div>
                                <div className="personal-card">
                                    <div className="image">
                                        <img src={Image4} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            PERSON 1
                                        </h4>
                                        <p>Enhance your knowledge with our curated educational resources, designed for students, </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="text-center">
                                <Link to="" className="theme-btn">Know More</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}