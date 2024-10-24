import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./TestimonialSection.css";
import { FaArrowRight, FaStar, FaStarHalf } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function TestimonialSection() {
    return (
        <section className="section-spacing px-0 testimonial-section">
            {/* <div className="animation-text">
                testimonial
            </div> */}
            <div className="container-fluid py-lg-4">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex section-spacing py-0 mb-5 align-items-end heading-box justify-content-between">
                            <h2 className="main-heading">
                            Our <span>Testimonials </span>
                            </h2>
                            <Link to="">
                                View All <FaArrowRight />
                            </Link>
                        </div>
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={1.8}
                            freeMode={true}
                            loop={true}
                            pagination={false}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div className="image">
                                        <img src={NoImg} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Name
                                        </p>
                                        <span>
                                            Designation
                                        </span>
                                        <p className="review">
                                            Various versions have evolved over the years, you are sometimes by accident, sometimes on purpose
                                        </p>
                                        <ul>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStarHalf />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div className="image">
                                        <img src={NoImg} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Name
                                        </p>
                                        <span>
                                            Designation
                                        </span>
                                        <p className="review">
                                            Various versions have evolved over the years, you are sometimes by accident, sometimes on purpose
                                        </p>
                                        <ul>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStarHalf />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    <div className="image">
                                        <img src={NoImg} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Name
                                        </p>
                                        <span>
                                            Designation
                                        </span>
                                        <p className="review">
                                            Various versions have evolved over the years, you are sometimes by accident, sometimes on purpose
                                        </p>
                                        <ul>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStar />
                                            </li>
                                            <li>
                                                <FaStarHalf />
                                            </li>
                                        </ul>
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