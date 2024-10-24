import NoImg from "../../../assets/img/no-image.jpg";
import "./VisionSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function VisionSection() {
    return (
        <section className="section-spacing vision-section pt-0 mb-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 left-section">
                        <img src='https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/3.jpg' className="img-fluid w-100 mb-4" alt="" />
                        <h2 className="main-heading">
                            about <span><i>dsa</i></span>
                        </h2>

                        <p>
                            The Mumbai attacks (2008) intrigue us to establish Defence and Security Alert (DSA), a pivotal initiative aimed at addressing issues pertained to defence, security, and world affairs, originally designed to inform decision and policymakers in India. But as Global landscape drastically changed within few years, DSA quickly adapted to these shifts in the genre, expanding its vision to encompass international issues.
                        </p>
                    </div>
                    <div className="col-lg-6 right-section">
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={1}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper ps-lg-5"
                        >
                            <SwiperSlide>
                                <div className="magazine-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
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
                                </div>
                                <div className="magazine-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
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
                                </div>
                                <div className="magazine-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
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
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}