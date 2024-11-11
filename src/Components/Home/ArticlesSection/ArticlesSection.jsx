import { Link } from "react-router-dom";
import "./ArticlesSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image1 from "../../../assets/img/self.png";
import Image2 from "../../../assets/img/16.jpg";
import Image3 from "../../../assets/img/17.jpg";
import headingImg from "../../../assets/img/Def-sec-edu.png";
import { FaArrowRight } from "react-icons/fa";
export default function ArticlesSection() {
    return (
        <section className="section-spacing pt-0 articles-section">
            <div className="container-fluid py-lg-5">
                <div className="row justify-content-between">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="section-spacing pt-0 pb-2 heading-box mb-2 pe-0">
                            <h2 className="main-heading">
                                Articles
                            </h2>
                            <p>
                                DSA’s articles are crafted by leading subject experts, providing authoritative insights and in-depth research- based analysis on defence, security and International affairs. We cover a diverse range of topics with a unique blend of global and India-specific perspectives, making them a valuable resource for informed decision-making.
                            </p>
                            <div className="text-lg-end mt-4">
                                <Link to="/articles">
                                    View All
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="left-swiper-box">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                // freeMode={true}
                                loop={true}
                                pagination={{
                                    clickable: true
                                }}
                                modules={[FreeMode, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="article-left-card">
                                        <div className="right-content-box">
                                            <div className="top-section">
                                                <h3>
                                                    Self
                                                    acceptance.
                                                </h3>
                                                <div className="image">
                                                    <img src={Image1} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <span>
                                                    on June 8, 2020
                                                </span>
                                                <p className="des">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                </p>
                                                <Link to="">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="article-left-card">
                                        <div className="right-content-box">
                                            <div className="top-section">
                                                <h3>
                                                    Self
                                                    acceptance.
                                                </h3>
                                                <div className="image">
                                                    <img src={Image1} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <span>
                                                    on June 8, 2020
                                                </span>
                                                <p className="des">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                </p>
                                                <Link to="">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="article-left-card">
                                        <div className="right-content-box">
                                            <div className="top-section">
                                                <h3>
                                                    Self
                                                    acceptance.
                                                </h3>
                                                <div className="image">
                                                    <img src={Image1} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <span>
                                                    on June 8, 2020
                                                </span>
                                                <p className="des">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                </p>
                                                <Link to="">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-section">
                            <div className="heading">
                                <h2 className="main-heading">
                                    <img src={headingImg} className="img-fluid" alt="" />
                                </h2>
                            </div>
                            <div className="cards-box">
                                <div className="top-section">
                                    <img src={Image2} className="img-fluid" alt="" />
                                    <div className="content">
                                        <span>
                                            on June 8, 2020
                                        </span>
                                        <p>simply dummy text of the printing setting</p>
                                    </div>
                                </div>
                                <div className="bottom-section">
                                    <img src={Image3} className="img-fluid" alt="" />
                                    <div className="content">
                                        <span>
                                            on June 8, 2020
                                        </span>
                                        <p>simply dummy text of the printing setting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-event-btn">
                            <Link to="/def-sec-edu" >Stay Updated With Us  <FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}