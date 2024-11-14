import NoImg from "../../../assets/img/no-image.jpg";
import "./VisionSection.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image1 from "../../../assets/img/Editions/April 2024.jpg";
import Image2 from "../../../assets/img/Editions/February 2024.jpg";
import Image3 from "../../../assets/img/Editions/January 2024.jpg";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useState } from "react";
export default function VisionSection() {
  const [showOverview, setShowOverview] = useState(true);
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);

  const handleOverviewClick = () => {
    setShowOverview(true);
    setShowMission(false);
    setShowVision(false);
  };

  const handleVisionClick = () => {
    setShowVision(true);
    setShowMission(false);
    setShowOverview(false);
  };

  const handleMissionClick = () => {
    setShowMission(true);

    setShowVision(false);
    setShowOverview(false);
  };

  return (
    <section className="section-spacing vision-section  pt-5 pt-0 mb-5">
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <div className="col-lg-7 left-section pe-lg-8 ">
            <img
              src="https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/3.jpg"
              className="img-fluid w-100 mb-4"
              alt=""
            />

            <div className="left-section-bottom">
              <span  className={showOverview ? "active": ""}onClick={handleOverviewClick} > OVERVIEW </span>
              <span className={showVision? "active":""} onClick={handleVisionClick}>VISION</span>
              <span  className={showMission ? "active":""} onClick={handleMissionClick}>MISSION</span>
            </div>
            {showOverview ? (
              <div>
                <h5>Defence And Security alert Magazine</h5>
                <p>
                  Defence and Security Alert (DSA), established in 2009
                  following the 26/11 Mumbai attacks, aimed to provide
                  comprehensive analysis on defence, security and International
                  Affairs. Initially India-focused, it swiftly expanded to
                  address global challenges. The magazine features insightful
                  articles from top experts worldwide, discussing threats and
                  solutions for a secure world. DSA holds the prestigious ISO
                  9001:2015 Certification and has been uniquely featured on the
                  Indian Air Force (IAF) INTRANET for seven consecutive years,
                  reinforcing its credibility in the defence, security and
                  International Affairs domain.
                </p>
              </div>
            ) : (
              ""
            )}

            {showVision ? (
              <div>
                <h5>Defence And Security alert Magazine</h5>
                <p>
                  Vsiion Defence and Security Alert (DSA), established in 2009
                  following the 26/11 Mumbai attacks, aimed to provide
                  comprehensive analysis on defence, security and International
                  Affairs. Initially India-focused, it swiftly expanded to
                  address global challenges. The magazine features insightful
                  articles from top experts worldwide, discussing threats and
                  solutions for a secure world. DSA holds the prestigious ISO
                  9001:2015 Certification and has been uniquely featured on the
                  Indian Air Force (IAF) INTRANET for seven consecutive years,
                  reinforcing its credibility in the defence, security and
                  International Affairs domain.
                </p>
              </div>
            ) : (
              ""
            )}

            {showMission ? (
              <div>
                <h5>Defence And Security alert Magazine</h5>
                <p>
                  Mission Defence and Security Alert (DSA), established in 2009
                  following the 26/11 Mumbai attacks, aimed to provide
                  comprehensive analysis on defence, security and International
                  Affairs. Initially India-focused, it swiftly expanded to
                  address global challenges. The magazine features insightful
                  articles from top experts worldwide, discussing threats and
                  solutions for a secure world. DSA holds the prestigious ISO
                  9001:2015 Certification and has been uniquely featured on the
                  Indian Air Force (IAF) INTRANET for seven consecutive years,
                  reinforcing its credibility in the defence, security and
                  International Affairs domain.
                </p>
              </div>
            ) : (
              ""
            )}

            {/* <h2 className="main-heading">
                            about <span><i>dsa</i></span>
                        </h2> */}
          </div>
          <div className="col-lg-5 right-section ">
            <Swiper
              spaceBetween={40}
              slidesPerView={1}
              freeMode={true}
              loop={true}
                pagination={{
                  clickable: true,
                }}
              modules={[FreeMode, Pagination]}
              className="mySwiper ps-lg-5 "
            >
              <SwiperSlide>
                <div className="magazine-card ">
                  <div className="image">
                    <img src={Image1} className="img-fluid" alt="" />
                  </div>
                  <div className="content px-3">
                    <div className="top">
                      <span>October 2024</span>
                      <span>Volume 16 | Issue 02</span>
                    </div>
                    <div className="top-bottom">
                      <h5>
                        {" "}
                        Simply Dummy Text of The <br></br> Printing Setting
                      </h5>

                      <p>
                        There are many variations of passages of Lorem <br></br>
                        Ipsum available, but the majority have suffered{" "}
                        <br></br>alteration in some form, by injected humour,or{" "}
                        <br></br> randomised words which don't look even
                        slightly<br></br> believable
                      </p>
                    </div>
                  </div>
                </div>

                <div className="magazine-card">
                  <div className="image">
                    <img src={Image2} className="img-fluid" alt="" />
                  </div>
                  <div className="content px-3">
                    <div className="top">
                      <span>October 2024</span>
                      <span>Volume 16 | Issue 02</span>
                    </div>
                    <div className="top-bottom">
                      <h5>
                        {" "}
                        Simply Dummy Text of The <br></br> Printing Setting
                      </h5>

                      <p>
                        There are many variations of passages of Lorem <br></br>
                        Ipsum available, but the majority have suffered{" "}
                        <br></br>alteration in some form, by injected humour,or{" "}
                        <br></br> randomised words which don't look even
                        slightly<br></br> believable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="magazine-card">
                  <div className="image">
                    <img src={Image3} className="img-fluid" alt="" />
                  </div>
                  <div className="content px-3">
                    <div className="top">
                      <span>October 2024</span>
                      <span>Volume 16 | Issue 02</span>
                    </div>
                    <div className="top-bottom">
                      <h5>
                        {" "}
                        Simply Dummy Text of The <br></br> Printing Setting
                      </h5>

                      <p>
                        There are many variations of passages of Lorem <br></br>
                        Ipsum available, but the majority have suffered{" "}
                        <br></br>alteration in some form, by injected humour,or{" "}
                        <br></br> randomised words which don't look even
                        slightly<br></br> believable
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="magazine-card">
                                    <div className="image">
                                        <img src={Image3} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <span>
                                            on June 8, 2020
                                        </span>
                                        <p>
                                            simply dummy text
                                            of the printing setting
                                        </p>
                                    </div>
                                </div> */}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
