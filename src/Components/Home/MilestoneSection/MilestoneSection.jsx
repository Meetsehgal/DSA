import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import bgImg from "../../../assets/img/milestones-bg.png";
import "./MilestoneSection.css";
export default function MilestoneSection({ HeadingText }) {
    return (
        <section className="section-spacing px-0 pt-0   milestone-section">
            <div className="container py-lg-4 position-relative">
                <img src={bgImg} className='img-fluid bg-img' alt="" />
                <div className="row">
                    <div className="col-12">
                        <h2 className="main-heading d-none text-center">
                            <span><i>dsa</i></span> milestones
                        </h2>
                        <p className='text-center w-75  mb-5 mx-auto heading-text'>{HeadingText}</p>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            freeMode={true}
                            loop={false}
                             pagination={{
                                clickable:"true"
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper pt-5 pt-lg-0"
                        >
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        8 yrs
                                    </p>
                                    <span className="content">
                                        On IAF Intranet
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        90+
                                    </p>
                                    <span className="content">
                                        High-Profile Interviews
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        180
                                    </p>
                                    <span className="content">
                                        Editions Published so far
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        50+
                                    </p>
                                    <span className="content">
                                        Areas covered
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        1k+
                                    </p>
                                    <span className="content">
                                        Contributors
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        90+
                                    </p>
                                    <span className="content">
                                        Media Partners
                                    </span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        30+
                                    </p>
                                    <span className="content">
                                        High Profile Recognition
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        60k+
                                    </p>
                                    <span className="content">
                                        Online Outreach
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        25k+
                                    </p>
                                    <span className="content">
                                        Print Outreach
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