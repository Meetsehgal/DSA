import NoImg from "../../../assets/img/no-image.jpg";
import "./DsaUpsSection.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import One from "../../../assets/img/icons/Apache Helicopter.png";
import Two from "../../../assets/img/icons/Guarantee.png";
import Three from "../../../assets/img/icons/India National Emblem.png";
import Four from "../../../assets/img/icons/Interview.png";
export default function DsaUpsSection() {
    return (
        <section className="section-spacing dsa-ups-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* <h2 className="main-heading text-center mb-4">
                            <span>DSA</span> UPS’s
                        </h2> */}
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1.2}
                            freeMode={true}
                            loop={true}
                            pagination={false}
                            breakpoints={{
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 3,
                                  spaceBetween: 20,
                                },
                                1024: {
                                  slidesPerView: 4,
                                  spaceBetween: 20,
                                },
                              }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="dsa-card">
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
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={One} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Exclusive Air Force Access:
                                        </p>
                                        <p>The only magazine featured on the Indian Air Force intranet</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={Four} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            High-Profile Interviews
                                        </p>
                                        <p>Insights from leading defence and security subject experts worldwide</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={Three} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Publication History
                                        </p>
                                        <p>Tailored to India’s defence needs with a global outlook on emerging threats</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}