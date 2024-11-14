import NoImg from "../../../assets/img/no-image.jpg";
import "./DsaUpsSection.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import One from "../../../assets/img/icons/1.png";
import Two from "../../../assets/img/icons/2.png";
import Three from "../../../assets/img/icons/3.png";
import Four from "../../../assets/img/icons/4.png";
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
                                        <img src={One} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            ISO 9001:2015 Certification:
                                        </p>
                                        <p>DSA is the sole magazine in its segment with this  .</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={Two} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Exclusive Air Force Access:
                                        </p>
                                        <p>The only defence and security magazine available on  (IAF)  .</p>
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
                                            High-Profile Interviews
                                        </p>
                                        <p>DSA has published interviews with 18 Chiefs of the Indian Army.</p>
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
                                            Publication History
                                        </p>
                                        <p>The magazine has released 180 editions over a span of 15 years.</p>
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
                                            Reliability
                                        </p>
                                        <p>Trusted magazine by the Indian Army, Navy and Air Force Chiefs.</p>
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