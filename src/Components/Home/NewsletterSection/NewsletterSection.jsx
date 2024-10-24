import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import "./NewsletterSection.css";
import moment from 'moment';

export default function NewsletterSection({ banners }) {

    return (
        <section className="section-spacing py-4 newsletter-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={false}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            {
                                banners?.map((item, id) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="newsletter-card">
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