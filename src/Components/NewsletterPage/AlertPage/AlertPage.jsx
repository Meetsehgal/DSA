import { Link } from "react-router-dom";
import "./AlertPage.css";
import NavigationSection from "../NavigationSection/NavigationSection";

import { useState, useEffect } from 'react';
import PostApiCall from "../../../Helpers/Api/PostApi";

export default function AlertPage() {

    const [newsLetterAlertData, setNewsLetterAlertData] = useState([]);

    const getNewsLetterAlertData = () => {
        PostApiCall.postRequest({ whereClause: "" }, "GetNewsAlert").then((results) => {
            results.json().then((obj) => {
                if (results.status === 200 || results.status === 201) {
                    setNewsLetterAlertData(obj.data);
                } else {
                    // notification.error({
                    //   message: `Notification error`,
                    //   description: obj.data,
                    // });
                }
            })
        })
    }

    useEffect(() => {
        getNewsLetterAlertData();
    }, [])

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    return (
        <>
            <NavigationSection />
            <section className="section-spacing alert-page py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="category-tab">
                                <p>
                                    Categories
                                </p>
                                <ul>
                                    <li>
                                        Year
                                    </li>
                                    <li>
                                        Month
                                    </li>
                                    <li>
                                        All
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {newsLetterAlertData?.map((item, id) => {
                                return <div className="alert-news-card" key={id}>
                                    <div className="image">
                                        <img src={item?.fld_image} className="img-fluid" alt={item?.fld_alt} />
                                    </div>
                                    <div className="content">
                                        <div>
                                            <h3>
                                                {item?.fld_title}
                                            </h3>
                                            <p dangerouslySetInnerHTML={{ __html: item?.fld_short_desc }} />

                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <span>
                                                Date -  {item?.fld_date || "Not available"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            })
                            }

                            {/* <div className="alert-news-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            Heading of the news
                                        </h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <span>
                                            Date -
                                        </span>
                                        <Link to="">
                                            Full news</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="alert-news-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            Heading of the news
                                        </h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <span>
                                            Date -
                                        </span>
                                        <Link to="">
                                            Full news</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="alert-news-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            Heading of the news
                                        </h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <span>
                                            Date -
                                        </span>
                                        <Link to="">
                                            Full news</Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}