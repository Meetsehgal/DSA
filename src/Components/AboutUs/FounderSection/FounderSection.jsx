    import { Link } from "react-router-dom";
// import NoImg from "../../../assets/img/Bauji-profile-Eng-1.jpg";
import FounderImage from "../../../assets/img/about/Our Founder.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import "./FounderSection.css";
export default function FounderSection() {
    return (
        <>
            <section className="section-spacing founder-section py-0  ">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 left-section">
                            <h2 className="main-heading mb-4">
                                meet our <span>founder</span>
                            </h2>
                            <p className="sub"><i>DSA</i> History</p>
                            <p>
                            A Doyen of Indian Publication Industry.
He headed the Prabhat Group (incorporating Prabhat Prakashan (P) Ltd., Prabhat Paperbacks, Sahitya Amrit, Ocean Books (P) Ltd. Ocean Media (P) Ltd. Defence and Security Alert (DSA) monthly magazine and Prabhat Paperbacks). Prabhat Prakashan, one of the leading publishing houses of India, has till date published over 6,000 titles of quality books on almost all streams of literature, viz. children’s books, fiction, dictionaries and encyclopaedia, science, quizzes, humanities, personality development, health, etc.
                            </p>
                            <Link to="">Journey So Far</Link>
                        </div>


                        <div className=" col-lg-5   right-section justify-content-center">
                            <img src={FounderImage} className="img-fluid" alt="" />
                            <p className="name">
                            <span>Late</span> Shri Shyam Sunder
                            </p>
                            <span>
                                Founder
                            </span>
                            {/* <div className="text-end">
                                <Link to="" >Read The Blog</Link>
                            </div> */}
                        </div>







{/* 
                        <div className="col-lg-4 right-section px-lg-0 position-relative">
                            <div className="main-heading">
                                <h2>Late Shri Shyam <span>Sunder</span></h2>
                            </div>
                            <img src={NoImg} className="img-fluid" alt="" />
                        </div> */}




                    </div>
                </div>
            </section>
            <section className="bg-theme-light comittesd-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                slidesPerView={.6}
                                spaceBetween={20}
                                freeMode={true}
                                pagination={false}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 2.2,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[FreeMode, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <p>Committed to Defence and Security Worldwide</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Committed to Defence and Security Worldwide</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Committed to Defence and Security Worldwide</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Committed to Defence and Security Worldwide</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p>Committed to Defence and Security Worldwide</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}