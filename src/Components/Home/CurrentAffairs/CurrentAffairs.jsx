import { Link, useNavigate } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import Img from "../../../assets/img/img.png";
import NoVideo from "../../../assets/img/no-video.png";
import "./CurrentAffairs.css";
import { FaArrowRight, FaBullhorn, FaPlay } from "react-icons/fa";
import BgShape from "../../../assets/img/bg-shapes/2.png";
import Horn from "../../../assets/img/icons/Megaphone.png";
import { GoArrowRight } from "react-icons/go";
export default function CurrentAffairs({ banners }) {
    let navigate = useNavigate()
    return (

        <section className="section-spacing current-affairs-section mt-lg-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex main-headin-box pb-3 justify-content-between mb-4">
                            <h2 className="main-heading">
                                Current<span> Affairs</span>
                            </h2>
                            <p className="text-lg-end">
                            DSA is committed to extend a supportive hand to youth, students, professionals to stay updated and aware on the defence, security and international affairs worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4  mb-5 mb-lg-0"  onClick={()=> navigate(`/news/${banners[0]?.fld_id}`)}>
                        <div className="left-box">
                            <img src={banners[0]?.fld_image} alt={banners[0]?.fld_alt} className="img-fluid" />
                            <div className="bottom-text">
                                <span>
                                    {banners[0]?.fld_createdon}
                                </span>
                                <p>
                                    {banners[0]?.fld_heading}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5  mb-5 mb-lg-0">
                        <div className="center-box px-lg-2">
                            <div className="top-section">
                                <div className="btn-box">
                                    <div className="position-relative">
                                        <img src={BgShape} className="img-fluid bg-shape" alt="" />
                                        <Link to="">
                                            <img src={Horn} className="img-fluid" alt="" />
                                        </Link>
                                    </div>  
                                </div>
                                <img src={banners[1]?.fld_image} className="img-fluid" alt={banners[1]?.fld_alt} onClick={()=> navigate(`/news/${banners[1]?.fld_id}`)}/>
                                <div className="content">
                                    <p>
                                        {banners[1]?.fld_short_desc}
                                    </p>
                                        <span>{banners[1]?.fld_createdon}</span>
                                </div>
                            </div>
                            <div className="bottom-vido-section">
                                <img src={banners[2]?.fld_image} className="img-fluid" alt={banners[2]?.fld_alt} />
                                <FaPlay />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-3  mb-5 mb-lg-0">
                        <div className="right-box">
                            <div className="top-section">
                                <img src={banners[3]?.fld_image} className="img-fluid" alt={banners[3]?.fld_alt}   onClick={()=> navigate(`/news/${banners[3]?.fld_id}`)} />
                                <div className="content ">
                                    <span>{banners[3]?.fld_createdon}</span>
                                    <p>
                                    {banners[3]?.fld_heading}
                                    </p>
                                </div>
                            </div>
                            <div className="view-all-btn">
                                <Link to="/newsletter-news"><span>View All <br /> Categories</span> <GoArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}