import './DsaUps.css';
import NoImg from "../../../assets/img/no-image.jpg";
import One from "../../../assets/img/icons/1.png";
import Two from "../../../assets/img/icons/2.png";
import Three from "../../../assets/img/icons/3.png";
import Four from "../../../assets/img/icons/4.png";
export default function DsaUps() {
    return (
        <section className="section-spacing about-dsa-section pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="main-heading text-center mb-4">
                            <span>DSA</span> UPS’s
                        </h2>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card">
                            <div className="count">
                                01
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={One} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        ISO 9001:2015 Certification:
                                    </p>
                                    <p>DSA is the sole magazine in its sector with this prestigious certification.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card">
                            <div className="count">
                                02
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={Two} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        Exclusive IAF Intranet Availability:
                                    </p>
                                    <p>The only defence and security magazine available on the Indian Air Force (IAF) intranet for the past 8 consecutive years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card">
                            <div className="count">
                                03
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={Three} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        High-Profile Interviews
                                    </p>
                                    <p>DSA has published interviews with 18 Chiefs of the Indian Army, Navy, and Air Force.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card last-dsa-card">
                            <div className="count">
                                04
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={Four} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        Publication History:
                                    </p>
                                    <p>The magazine has released 180 editions over a span of 15 years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

