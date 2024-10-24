import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import Arrow from "../../../assets/img/icons/Vector.png";
import "./PodcastSection.css";
export default function PodcastSection({ banners }) {
    return (
        <section className="section-spacing px-lg-4 podcast-section">
            <div className="container-fluid">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-7 left-section">
                        <div className="top-section">
                            <div className="img"></div>
                            {/* <img src={NoImg} className="img-fluid" alt="" /> */}
                            <div className="content">
                                <div className="text">
                                    <h2 className="main-heading">
                                        podcasts <br />
                                        that will inspire <br /> you to grow
                                    </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <img src={Arrow} className="img-fluid" alt="" />
                                </div>
                                <div className="youtube-btn">
                                    <Link to="">youtube channel</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-two-cards">
                            <div className="b-card">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <div>
                                    <span>on June 8, 2020</span>
                                    <p>#Loremipsum</p>
                                </div>
                            </div>
                            <div className="b-card">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <div>
                                    <span>on June 8, 2020</span>
                                    <p>#Loremipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
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