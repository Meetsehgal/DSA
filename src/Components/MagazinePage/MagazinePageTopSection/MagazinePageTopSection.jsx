import "./MagazinePageTopSection.css";
import CenterBanner from "../../../assets/img/magazine-mockup.png";
import LeftImg from "../../../assets/img/contact-mission.png";
import { Link } from "react-router-dom";

export default function MagazinePageTopSection({data}) {
    
    return (
        <section className="section-spacing py-4 magazine-page-top-section">
            <div className="container position-relative">
                <div className="row">
                    <div className="left-img">
                        <img src={LeftImg} className="img-fluid " alt="" />
                    </div>
                    <div className="col-lg-7 col-8   mx-lg-auto text-end text-lg-center center-banner-wrapper">
                        <img src={data[0]?.fld_image} alt={data[0]?.fld_alt} className="img-fluid center-banner" />
                    </div>
                    <div className="content-box">
                        <div className="main-heading">
                            {/* heading format : check this */}
                            <h2>
                                <i>DSA</i> <span>magazines</span>
                            </h2>
                        </div>
                        <b>
                            About our magazines
                        </b>
                        <p>
                            {data[0]?.fld_short_desc}
                        </p>
                        {/* Note : points at the bottom of the page, it should be at the top */}
                        <Link to="/editions" className="theme-btn">View our Editions</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}