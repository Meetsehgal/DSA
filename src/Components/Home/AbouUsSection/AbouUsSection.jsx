import { Link, useNavigate } from "react-router-dom";
import "./AbouUsSection.css";
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import BgShape from "../../../assets/img/bg-shapes/3.png";
import PostApiCall from "../../../Helpers/Api/PostApi";
export default function AbouUsSection({banners}) {
    let navigate = useNavigate()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [magazinesEditionData, setMagazinesEditionData] = useState([]);

    const getMagazinesEditionData = () => {
        PostApiCall.postRequest(
            {
            whereClause:""
            },
            "GetEditions"
          ).then((results) => {
            results.json().then((obj) => {
              if (results.status === 200 || results.status === 201) {
                setMagazinesEditionData(obj.data)
              } else {
              }
            });
          });
      }

      useEffect(()=>{
        getMagazinesEditionData();
      },[])
    return (
        <section className="section-spacing pb-4 about-section position-relative ">
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col-lg-8 left-section">
                        <img alt={banners[0]?.fld_alt} src={banners[0]?.fld_desktop_image} className="img-fluid" />
                        <div className="content">
                            <img src={BgShape} className="img-fluid bg-shape" alt="" />
                            <div className="inner-content">
                                <h2 className="main-heading">about <span>us</span></h2>
                                <p>Defence and Security Alert (DSA) is India’s first ISO 9001:2015 certified world-class monthly magazine, established in October 2009. It is dedicated to defence and security journalism, covering defence, security, and international affairs not only in India but also globally. Owned by Ocean Media Private Limited, New Delhi, DSA provides research-based insights from renowned subject experts and has been uniquely available on the Indian Air Force (IAF) INTRANET for the past eight consecutive years.</p>

                            </div>
                            <div className="learn-more-btn">
                                <Link to="/about-us">
                                    Learn About Us

                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 about-section-swiper">
                        <h2 className="main-heading text-center mb-0 mt-4">
                            <i>dsa</i> <span>editions</span>
                        </h2>
                        <p>
                        <span>“</span> World's only magazine available on <br />
                        the intranet of the Indian air force
                        </p>
                        <Swiper
                            style={{    
                                // '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={false}
                            // thumbs={{ swiper: thumbsSwiper }}
                            // pagination={{
                            //     clickable:"true"
                            // }}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[FreeMode, Pagination, Thumbs]}
                            className="mySwiper2 about-swiper-top mt-3"
                        >
                             {magazinesEditionData?.map((item)=>{
                                return(
                                <SwiperSlide>
                                    <div onClick={()=>{navigate("/flip-book",{
                                                                                state: {
                                                                                path:item?.fld_pdf_link
                                                                                }
                                                                            })}}>
                                    <img alt={item?.fld_alt} src={item?.fld_thumbnail} />
                                    </div>
                                </SwiperSlide>
                                )
                            })}
                        </Swiper>




                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={5}
                            slidesPerView={4.5}
                            freeMode={true}
                            
                            watchSlidesProgress={true}
                            pagination={{
                                clickable: "true"
                            }}
                            modules={[FreeMode, Pagination, Thumbs]}
                            className="mySwiper"
                        >
                            {magazinesEditionData?.map((item)=>{
                                return(
                                <SwiperSlide>
                                    <img alt={item?.fld_alt} src={item?.fld_thumbnail} />
                                </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}