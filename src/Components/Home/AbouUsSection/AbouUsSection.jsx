import { Link } from "react-router-dom";
import "./AbouUsSection.css";
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Pagination, Thumbs } from 'swiper/modules';
import NoImg from "../../../assets/img/no-image.jpg";
import BgShape from "../../../assets/img/bg-shapes/3.png";
export default function AbouUsSection({banners}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="section-spacing pb-4 about-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 left-section">
                        <img alt={banners[0]?.fld_alt} src={banners[0]?.fld_desktop_image} className="img-fluid" />
                        <div className="content">
                            <img src={BgShape} className="img-fluid" alt="" />
                            <div className="inner-content">
                                <h2 className="main-heading">about <span>us</span></h2>
                                <p>Defence and Security Alert (DSA) is India's first ISO 9001:2015 certified world-class monthly magazine established in October, 2009 focused on defence and security journalism covering the defence security &world affaire related to just not only India but globally Owned by Ocean Media Private Limited, New Delhi, DSA offers research-based insights from renowned experts and has been uniquely available on the Indian Air Force (IAF) INTRANET for the past seven years.</p>

                            </div>
                            <div className="learn-more-btn">
                                <Link to="">
                                    Learn About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 about-section-swiper">
                        <h2 className="main-heading text-center mb-0">
                            <i>dsa</i> <span>editions</span>
                        </h2>
                        <p>
                        <span>“</span> World's only magazine available on <br />
                        the intranet of the Indian air force
                        </p>
                        <Swiper
                            style={{
                                // '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={false}
                            // thumbs={{ swiper: thumbsSwiper }}
                            // pagination={{
                            //     clickable:"true"
                            // }}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Pagination, Thumbs]}
                            className="mySwiper2 about-swiper-top"
                        >
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={20}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            pagination={{
                                clickable: "true"
                            }}
                            modules={[FreeMode, Pagination, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}