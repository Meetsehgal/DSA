import './DsaUps.css';
import One from "../../../assets/img/icons/Apache Helicopter.png";
import Two from "../../../assets/img/icons/Guarantee.png";
import Three from "../../../assets/img/icons/India National Emblem.png";
import Four from "../../../assets/img/icons/Interview.png";
export default function DsaUps() {
    return (
        <section className="section-spacing about-dsa-section mb-5 pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="main-heading text-center mb-4">
                            <span><i>DSA</i></span> USP’s
                        </h2>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card">
                            <div className="count">
                                01
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={Two} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                    ISO 9001:2015 Certification:
                                    </p>
                                    <p>Trusted for accurate, high-quality defence and security insights</p>
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
                                    <img src={One} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                    Exclusive Air Force Access
                                    </p>
                                    <p>The only magazine featured on the Indian Air Force intranet</p>
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
                                    <img src={Four} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                    Expert Global Perspectives
                                    </p>
                                    <p>Insights from leading defence and security subject experts worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-0">
                        <div className="dsa-card last-dsa-card">
                            <div className="count">
                                04
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={Three} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                    India-Focused, Globally Informed:
                                    </p>
                                    <p>Tailored to India’s defence needs with a global outlook on emerging threats</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

