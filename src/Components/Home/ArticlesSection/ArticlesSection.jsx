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
import moment from "moment";
import { useEffect, useState } from "react";
import PostApiCall from "../../../Helpers/Api/PostApi";
export default function ArticlesSection() {
    const [data, setData] = useState([]);
    const [defSecEduData, setDefSecEduData] =useState([])
    const getMagazinesArticleData = () => {
        PostApiCall.postRequest(
            {
            whereClause:""
            },
            "GetMagazineArticles"
          ).then((results) => {
            results.json().then((obj) => {
              if (results.status === 200 || results.status === 201) {
                setData(obj.data)
              } else {
              }
            });
          });
      }
      const getDefSecEduData = () => {
        PostApiCall.postRequest(
            {
                whereClause:""
            },
            "GetDefSecEdu"
        ).then((results)=> {
          results.json().then((obj) => {
            if (results.status === 200 || results.status === 201) {
                setDefSecEduData(obj.data); 
          }else {
            // notification.error({
            //   message: `Notification error`,
            //   description: obj.data,
            // });
            }
          })
        })
      }
      useEffect(()=>{
        getMagazinesArticleData();
        getDefSecEduData();
      },[])
      const activeArticle = data?.filter((item)=> item?.fld_status === "Active")
      const activeDefSecEdu = defSecEduData?.filter((item)=> item?.fld_status === "Active")
    return (
        <section className="section-spacing pt-0 articles-section">
            <div className="container-fluid py-lg-5">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-md-6 pe-lg-5">
                        <div className=" pt-0 pb-2 heading-box mb-2 pe-0">
                            <h2 className="main-heading">
                                Articles
                            </h2>
                            <p className="des">
                            DSA's articles, crafted by leading subject experts, provide authoritative insights and in-depth analysis on defence, security, and international affairs, backed by exclusive reviewers and research-based evaluations.
                                 {/* International affairs. We cover a diverse range of topics with a unique 
                                 
                                 blend of global and India-specific perspectives, making them a valuable resource
                                  for informed decision-making. */}
                            </p>
                            <div className="text-lg-end mt-2">
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
                                 {activeArticle?.slice(0,3)?.map((item)=>{
                                    const words = item?.fld_short_desc.split(' ');
                                    const heading = item?.fld_heading.split(' ');
                                    return(
                                <SwiperSlide>
                                    <div className="article-left-card">
                                        <div className="right-content-box">
                                            <div className="top-section">
                                                <h4>
                                                {heading.slice(0,2).join(' ') + '...'}
                                                </h4>
                                                <div className="image">
                                                <img src={item?.fld_image} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div className="content">
                                                <span>
                                                {moment(item?.fld_createdon).format('MMMM D, YYYY')}
                                                </span>
                                                <p className="des">
                                                {words.slice(0, 11).join(' ') + '...'}
                                                </p>
                                                <Link to={`/article/${item?.fld_id}`}>Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                )
                            })}
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
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