import { Swiper, SwiperSlide } from 'swiper/react';
import northAmerica from "../../../../assets/img/News/Asset 6@300x.png";
import southAmerica from "../../../../assets/img/News/Asset 7@300x.png";
import asia from "../../../../assets/img/News/Asset 3@300x.png";
import europe from "../../../../assets/img/News/Asset 5@300x.png";
import australia from "../../../../assets/img/News/Asset 4@300x.png";
import antratica from "../../../../assets/img/News/Asset 2@300x.png";

 


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import "./RegionSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
export default function RegionSection() {
    return (
        <section className="section-spacing px-0 my-5 region-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="main-heading text-center">
                            <h2>
                                region
                            </h2>
                        </div>
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={20}
                            freeMode={true}
                            navigation
                            pagination={false}
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
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[FreeMode, Pagination,Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={northAmerica} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={southAmerica} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={asia} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={europe} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={australia} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={antratica} className="img-fluid" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}