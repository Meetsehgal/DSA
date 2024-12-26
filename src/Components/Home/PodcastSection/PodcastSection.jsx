import { Link } from "react-router-dom";
import Image1 from "../../../assets/img/podcast/24.jpg";
import Image2 from "../../../assets/img/podcast/25.webp";
import Arrow from "../../../assets/img/icons/Vector.png";
import "./PodcastSection.css";
export default function PodcastSection({ banners }) {
    return (
        <section className="section-spacing px-lg-5 podcast-section">
            <div className="container-fluid">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-7 left-section">
                        <div className="top-section">
                            <div className="img"></div>
                            {/* <img src={NoImg} className="img-fluid" alt="" /> */}
                            <div className="content">
                                <div className="text">
                                    <h2 className="main-heading">
                                        podcasts
                                        that will <br /> inspire you to grow
                                    </h2>
                                    <p>
                                    Our Podcasts deliver expert insights and stories to empower our generations, brings awareness in the society. These podcasts fuel personal and professional growth, aligning with DSA’s vision to keep you ahead in the defence, security and international affairs genre.
                                    </p>
                                    <img src={Arrow} className="img-fluid" alt="" />
                                </div>
                                <div className="youtube-btn mt-5">
                                    <Link to="https://www.youtube.com/">youtube channel</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-two-cards">
                            <div className="b-card">
                                <img src={Image1} className="img-fluid" alt="" />
                                <div>
                                    <span>on June 8, 2020</span>
                                    <p>#Loremipsum</p>
                                </div>
                            </div>
                            <div className="b-card">
                                <img src={Image2} className="img-fluid" alt="" />
                                <div>
                                    <span>on June 8, 2020</span>
                                    <p>#Loremipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 ">
                        <div className="right-card">
                            <img src={banners[0]?.fld_image} alt="" className="img-fluid" />
                            <div>
                                <span>{banners[0]?.fld_created_by}</span>
                                <p>{banners[0]?.fld_short_desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}