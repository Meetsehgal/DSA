import './DsaUps.css';
import NoImg from "../../../assets/img/no-image.jpg";
import One from "../../../assets/img/icons/1.png";
import Two from "../../../assets/img/icons/2.png";
import Three from "../../../assets/img/icons/3.png";
import Four from "../../../assets/img/icons/4.png";
export default function DsaUps() {
    return (
        <section className="section-spacing about-dsa-section mb-5 pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="main-heading text-center mb-4">
                            <span><i>DSA</i></span> UPS’s
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
                                        Exclusive Air Force Access:
                                    </p>
                                    <p>The only defence and security magazine available on the .</p>
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
                                        Expert Gobal Perspectives
                                    </p>
                                    <p>DSA has published interviews with 18 Chiefs of the Indian  .</p>
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
                                    <img src={Four} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        Publication History:
                                    </p>
                                    <p>The magazine has released 180 editions over a .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

