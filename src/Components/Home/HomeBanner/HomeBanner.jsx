import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import "./HomeBanner.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import BgShape from "../../../assets/img/bg-shapes/1.png";
import Army from "../../../assets/img/home/home-banner/army.png";
import Navy from "../../../assets/img/home/home-banner/navy.png";
import AirForce from "../../../assets/img/home/home-banner/air-force.png";
export default function HomeBanner({banners}) {
    return (
        <section className="section-spacing home-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 d-flex flex-column justify-content-between">
                        <div className="count-card">
                            <p className="count">
                                100+
                            </p>
                            <span className="content">
                                Our Clients
                            </span>
                        </div>
                        <div className="count-card">
                            <p className="count">
                                2K+
                            </p>
                            <span className="content">
                                Testimonials
                            </span>
                        </div>
                        <div className="count-card pb-2">
                            <p className="count">
                                300+
                            </p>
                            <span className="content">
                                Magazines
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="banner-section">
                            <Swiper pagination={{
                                clickable: true,
                            }} modules={[Pagination]} className="mySwiper">

                            {
                                banners.map((item,id)=> {return (<SwiperSlide>
                                    <img src={item?.fld_desktop_image} className='img-fluid' alt={item?.fld_alt} />
                                </SwiperSlide>)})
                            }
                             
                            </Swiper>
                            <div className="banner-btn">
                                <div className='position-relative'>
                                    <img src={BgShape} className='img-fluid' alt="" />
                                    <Link to="">Associate with <i>DSA</i> <FaArrowRight /></Link>
                                </div>
                            </div>
                            <div className="bottom-three-circle">
                                <p><img src={Army} className='img-fluid' alt="" /></p>
                                <p><img src={Navy} className='img-fluid' alt="" /></p>
                                <p><img src={AirForce} className='img-fluid' alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}