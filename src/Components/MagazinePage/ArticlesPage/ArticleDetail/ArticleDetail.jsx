import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./ArticleDetail.css";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import moment from "moment";
export default function ArticleDetail({ data }) {
    return (
        <section className="section-spacing pt-0 mb-5 article-detail-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 pe-lg-5">
                        <div className="article-card">
                            <div className="image">
                                <img src={data[0]?.fld_image} className="img-fluid" alt={data[0]?.fld_alt} />
                            </div>
                            <h2 className="name">
                                {data[0]?.fld_published_by}
                            </h2>
                        </div>
                        <div className="date">
                            <div className="box">
                                <p className="left">
                                    Date
                                </p>
                                <p>
                                    {moment(data[0]?.fld_createdon).format('MMMM D, YYYY')}
                                </p>
                            </div>
                            <div className="box">
                                <p className="left">
                                    read time
                                </p>
                                <p>
                                    {data[0]?.fld_read_time}
                                </p>
                            </div>
                            <div className="box">
                                <p className="left">
                                    Share
                                </p>
                                <ul>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="scroll-section">
                            {/* <b className="mb-4 d-block">
                          {data[0]?.fld_short_desc}
                        </b> */}
                            <p dangerouslySetInnerHTML={{ __html: data[0]?.fld_long_desc }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}