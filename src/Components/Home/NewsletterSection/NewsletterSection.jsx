import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import "./NewsletterSection.css";
import moment from 'moment';

export default function NewsletterSection({ banners }) {

    return (
        <section className="section-spacing py-4 newsletter-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            slidesPerView={1.3}
                            spaceBetween={40}
                            freeMode={true}
                            navigation
                            // scrollbar={true}
                            pagination={false}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[FreeMode, Pagination,Navigation]}
                            className="mySwiper"
                        >
                            {
                                banners?.map((item, id) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="newsletter-card">
                                                <div className="d-flex h-100">
                                                    <div className="image">
                                                        <img src={item?.fld_image} className='img-fluid' alt={item?.fld_alt} />
                                                    </div>
                                                    <div className="content">
                                                        <h5>{item?.fld_short_desc}</h5>
                                                        <span className="date">
                                                            {moment(item?.fld_createdon).format('MMMM D, YYYY')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}