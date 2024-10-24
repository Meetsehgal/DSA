import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import "./MilestoneSection.css";
export default function MilestoneSection({HeadingText}) {
    return (
        <section className="section-spacing px-0 pt-0 milestone-section">
            <div className="container py-lg-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="main-heading text-center">
                            <span><i>dsa</i></span> milestones
                        </h2>
                        <p className='text-center w-75 mb-5 mx-auto heading-text'>{HeadingText}</p>
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={6}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable:true
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        300+
                                    </p>
                                    <span className="content">
                                        Magazines
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        2K+
                                    </p>
                                    <span className="content">
                                        Testimonials
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        100+
                                    </p>
                                    <span className="content">
                                        Our Client
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        178
                                    </p>
                                    <span className="content">
                                        Magazines Editions
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        178
                                    </p>
                                    <span className="content">
                                        Authors
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        16
                                    </p>
                                    <span className="content">
                                        Interview Published
                                    </span>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}