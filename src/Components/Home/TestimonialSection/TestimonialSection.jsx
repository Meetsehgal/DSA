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
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import bgImg from "../../../assets/img/testimonial-bg.png";
import axios from "axios";
import { useEffect, useState } from "react";
import GetApiCall from "../../../Helpers/Api/GetApi";


export default function TestimonialSection() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const placeId = 'ChIJ6XMyHyf9DDkRIe21qe62t-s';  // Replace with your Google Place ID
    const apiKey = 'AIzaSyCFAyiNJjmO1DlmVNAs6ut34k8Z_EzYUAo';  // Replace with your Google API Key
  
    useEffect(() => {
      GetApiCall.getRequest("GetReviews"
      ).then((results) => {
        results.json().then((obj) => {
          if (results.status === 200 || results.status === 201) {
    console.log(obj.data)
  
          //   setBannersData(obj.data);
          } else {
          }
        });
      });
    }, [placeId, apiKey]);
    return (
        <section className="section-spacing px-0 testimonial-section position-relative">
            <img src={bgImg} className="img-fluid bg-img" alt="" />
            <div className="container-fluid py-lg-4 ">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-column flex-lg-row section-spacing py-0 mb-5 align-items-lg-end heading-box justify-content-lg-between">
                            <h2 className="main-heading">
                                Our <span>Testimonials </span>
                            </h2>
                            <Link to="">
                                View All <FaArrowRight />
                            </Link>
                        </div>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2.5}
                            freeMode={true}
                            loop={true}
                            navigation
                            pagination={false}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[FreeMode, Pagination,Navigation]}
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