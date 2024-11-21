import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import NoImg from "../../../assets/img/no-image.jpg";
import Gallery1 from "../../../assets/img/about/Gallery1.png";
import Gallery2 from "../../../assets/img/about/Gallery2.png";
import Gallery3 from "../../../assets/img/about/Gallery3.png";
import Gallery4 from "../../../assets/img/about/Gallery4.png";
import Gallery5 from "../../../assets/img/about/Gallery5.png";
import "./AboutGallerySection.css";
export default function AboutGallerySection() {
    return (
        <section className="section-spacing mt-5 about-gallery-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="top-heading">
                            <p>
                                Best attendance
                            </p>
                        </div>
                        <div className="main-heading">
                            <h2>
                                <span><i>dsa</i></span> galley
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        </div>
                        <Swiper
                        slidesPerView={1}
                        spaceBetween={12} 
                        pagination={{
                            clickable: true,
                        }} 
                        modules={[Pagination]}
                         className="mySwiper py-5 ">

                            <SwiperSlide className='row'>
                                <div className="col-lg-4 col-6">
                                    <img src={Gallery1} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-4 col-6">
                                    <img src={Gallery2} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-4 col-6">
                                    <img src={Gallery3} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-7 order-last order-lg-4">
                                    <img src={Gallery4} className='img-fluid' alt="" />
                                </div>
                                {/* <div className="col-lg-4 col-6 order-lg-last">
                                    <img src={Gallery5} className='img-fluid' alt="" />
                                </div> */}
                                <div className="col-lg-5 col-6 order-lg-last">
                                    <img src={Gallery5} className='img-fluid' alt="" />
                                </div>
<<<<<<< HEAD
                                <div className="col-lg-4 col-6 order-lg-last">
                                    <img src={Gallery1} className='img-fluid' alt="" />
                                </div>
=======
                                
                            </SwiperSlide>

                            <SwiperSlide className='row'>
                                <div className="col-lg-4 col-6">
                                    <img src={Gallery1} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-4 col-6">
                                    <img src={Gallery2} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-4 col-6">
                                    <img src={Gallery3} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-7 order-last order-lg-4">
                                    <img src={Gallery4} className='img-fluid' alt="" />
                                </div>
                                
                                <div className="col-lg-5 col-6 order-lg-last">
                                    <img src={Gallery5} className='img-fluid' alt="" />
                                </div>
                                
>>>>>>> dev
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}