import { Link } from "react-router-dom";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./PodcastsSection.css";
import Image1 from "../../../../assets/img/podcast/left.png";
import Image2 from "../../../../assets/img/podcast/professional-microphone-sound-studio-with-purple-backdrop.jpg";
import Image3 from "../../../../assets/img/podcast/close-up-podcast-microphone.jpg";
export default function PodcastsSection() {
    return (
        <section className="section-spacing podcast-event-page-podcast-section mb-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center top-section">
                        <h2 className="main-heading">
                            podcasts <br />
                            that will inspire you <br />
                            <span>To grow</span>
                        </h2>
                        <p>
                            <b>Imagine if you could</b>
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                        </p>
                        <div className="text-enter">
                            <Link to="https://www.youtube.com/" className="theme-btn">
                                YouTube channel
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row position-relative py-5 align-items-center justify-content-center center-section">
                    <div className="col-lg-4 col-4">
                        <img src={Image1} className="img-fluid left-img" alt="" />
                    </div>
                    <div className="col-lg-5 col-5">
                        <img src={Image2} className="img-fluid right-img" alt="" />
                    </div>
                    <div className="center-heading">
                        <h2>
                            expert opinions
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <p><b className="fs-4">About our experts</b></p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}