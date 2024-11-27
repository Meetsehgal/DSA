import { Link } from "react-router-dom";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./ArticleCategories.css";
import { useEffect, useState } from "react";
import moment from "moment";
export default function ArticleCategories({data}) {
    const [filteredData, setFilteredData] = useState(data);
    // const [selectedNews, setSelectedNews] = useState(null);

    const ActiveClassArray=[""];

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const getFilteredData = (category) => {
        if(category === ""){
            setFilteredData(data);
        }else{
            const filtered = data.filter(item => item.fld_category === category);
            setFilteredData(filtered);
        }

        ActiveClassArray.push("active"); 



    }
    return (
        <section className="section-spacing pt-0 article-category-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5 mb-3">
                        <div className="category-tab">
                            <p>
                                Categories
                            </p>
                            <ul>
                                <li className={ActiveClassArray.join(" ")} onClick={() => getFilteredData('Contributors')}>
                                    Contributors
                                </li>
                                <li  className={ActiveClassArray.join(" ")} onClick={() => getFilteredData('Defence')}>
                                    Defence
                                </li>
                                <li onClick={() => getFilteredData('Security')}>
                                    Security
                                </li>
                                <li onClick={() => getFilteredData('Worldwide Affairs')}>
                                    Worldwide Affairs
                                </li>
                                <li onClick={() => getFilteredData('Border Conflicts')}>
                                    Border Conflicts
                                </li>
                                <li onClick={() => getFilteredData('Emerging tech')}>
                                    Emerging tech
                                </li>
                                <li onClick={() => getFilteredData('')}>All</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                        {filteredData?.map((item,id)=>{
                                return (
                                <div className="col-12">
                                <div className="article-card" key={item.fld_id}>
                                    <div className="image">
                                        <img src={item?.fld_image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2 className="main-heading">
                                            <i>dsa</i> <span>
                                                mission
                                            </span>
                                        </h2>
                                        <p className="mb-1">
                                            <b>
                                            {item?.fld_heading}
                                            </b>
                                        </p>
                                        <p className="des">
                                            {item?.fld_short_desc}
                                        </p>
                                        <div className="d-flex flex-wrap justify-content-between align-item-end mt-4 pt-2">
                                            <ul className="d-flex justify-content-between align-items-end gap-3 article-date">
                                                <li>
                                                    By- {item?.fld_published_by}
                                                </li>
                                                <li>
                                                    Date- {moment(item?.fld_createdon).format('MMMM D, YYYY')}
                                                </li>
                                                {/* <li>
                                                    Time- {moment(item?.fld_createdon).format('HH:mm:ss')}
                                                </li> */}
                                            </ul>
                                            <Link to={`/article/${item?.fld_id}`}>
                                                full article
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )})}
                            <div className="col-12">
                                <div className="article-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <h2 className="main-heading">
                                            <i>dsa</i> <span>
                                                mission
                                            </span>
                                        </h2>
                                        <p className="mb-1">
                                            <b>
                                                Imagine if you could
                                            </b>
                                        </p>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                                        </p>
                                        <div className="d-flex justify-content-between mt-3">
                                            <ul className="d-flex flex-wrap justify-content-between gap-4 gap-lg-5">
                                                <li>
                                                    By-
                                                </li>
                                                <li>
                                                    Date-
                                                </li>
                                                <li>
                                                    Time-
                                                </li>
                                            </ul>
                                            <Link to="">
                                                full article
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-5 mt-lg-0">
                        <div className="row">
                            <div className="col-12">
                                <div className="magazine-card">
                                    <h5>
                                        Print Magazine 1
                                    </h5>
                                    <h2>
                                        03/ 2022
                                    </h2>
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="magazine-card">
                                    <h5>
                                        Print Magazine 1
                                    </h5>
                                    <h2>
                                        03/ 2022
                                    </h2>
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="magazine-card">
                                    <h5>
                                        Print Magazine 1
                                    </h5>
                                    <h2>
                                        03/ 2022
                                    </h2>
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="magazine-card">
                                    <h5>
                                        Print Magazine 1
                                    </h5>
                                    <h2>
                                        03/ 2022
                                    </h2>
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="magazine-card">
                                    <h5>
                                        Print Magazine 1
                                    </h5>
                                    <h2>
                                        03/ 2022
                                    </h2>
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}