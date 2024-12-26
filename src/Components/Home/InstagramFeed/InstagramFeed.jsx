import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./InstagramFeed.css";
export default function InstagramFeed() {
    return (
        <section className="section-spacing px-0 insta-feed-section ">
            {/* <div className="animation-text">
                testimonial
            </div> */}
            <div className="container-fluid ">
                <div className="row section-spacing">
                    <div className="col-12">
                        <div className="d-lg-flex  py-0 mb-4 align-items-end heading-box justify-content-between">
                            <h2 className="main-heading">
                                <span>Instagram</span> Feed
                            </h2>
                            <Link to="" className="text-end">
                                @dsamagazine <br />
                                #DSA
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3  col-sm-4 col-6 mb-3 test ">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3  col-md-3  col-sm-4 col-6 mb-3">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3  col-sm-4 col-6 mb-3">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3   col-sm-4 col-6 mb-3">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3  col-sm-4 col-6 mb-3 mb-lg-0">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3   col-sm-4 col-6 mb-3 mb-lg-0">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3   col-sm-4 col-6 mb-3 mb-lg-0">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-3 col-md-3   col-sm-4   col-6 mb-3 mb-lg-0">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}