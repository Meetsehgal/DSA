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
                                        1000+
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
                                        60000+
                                    </p>
                                    <span className="content">
                                    Online Outreach 
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="milestone-card">
                                    <p className="count">
                                        25000+
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