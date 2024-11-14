import { Link } from "react-router-dom";
import LeftImg from "../../../assets/img/contact-mission.png";
import "./ContactUsMissionSection.css"
export default function ContactUsMissionSection() {
    return (
        <section className="section-spacing mt-4 mt-lg-5 contact-us-mission-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 left-section">
                        <div className="d-flex align-items-center">
                            <div className="left-content">
                                <div className="main-heading">
                                    <h2>Imagine <span>if you could</span></h2>
                                </div>
                                <div>
                                    <div className="main-heading mt-4">
                                        <h4>Nationalism</h4>
                                    </div>
                                    {/* <b>defence and security alert magazine</b> */}
                                    <p>Imagine a world where a shared sense of national pride fuels collective efforts to protect and strengthen our homeland, inspiring citizens to stand united for the security and prosperity of our nation.</p>
                                </div>
                                <div>
                                    <div className="main-heading mt-4">
                                        <h4>Awareness</h4>
                                    </div>
                                    {/* <b>defence and security alert magazine</b> */}
                                    <p>Imagine a society where heightened awareness illuminates the unseen threats, enabling proactive measures and informed discussions that shape a safer and more secured future for all.</p>
                                </div>
                                <div>
                                    <div className="main-heading mt-4">
                                        <h4>Analytics</h4>
                                    </div>
                                    {/* <b>defence and security alert magazine</b> */}
                                    <p>Imagine harnessing the power of data and analytics to decode complex global trends, transforming information into strategic insights that guide critical decisions and shape effective defence strategies.</p>
                                </div>
                                <div>
                                    <div className="main-heading mt-4">
                                        <h4>Resilience</h4>
                                    </div>
                                    {/* <b>defence and security alert magazine</b> */}
                                    <p>Imagine a world where resilience is embedded in the very fabric of society, empowering us to adapt, withstand and thrive amidst any adversity, ensuring that we emerge stronger after every challenge.</p>
                                </div>
                            </div>
                            <div className="right-img">
                                <img src={LeftImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center right-section">
                        <div>
                            <div className="main-heading mb-3">
                                <h2>
                                    DSA <span>Mission</span>
                                </h2>
                            </div>
                            <b>Defence And Security Alert Magazine</b>
                            <p>Explore our monthly editions featuring the latest in Defence and Security, with exclusive interviews, expert insights and key global and regional updates. An essential resource for professionals and enthusiasts alike.</p>
                            <div className="mt-4">
                                <Link to="/about-us" className="theme-btn">Learn about Us</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}