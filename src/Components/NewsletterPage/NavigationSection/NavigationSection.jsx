import { FaFacebookF, FaInstagramSquare , FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./NavigationSection.css";
export default function NavigationSection() {
    return (
        <section className="section-spacing px-0 magazine-navigation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="main-heading">DefenCe & security Alert</h1>
                        <div className="navigation-bar">
                            <p className="name">
                                Newsletter
                            </p>
                            <ul className="inner-links">
                                <li>
                                    <Link to="/newsletter-news">News</Link>
                                </li>
                                {/* <li>
                                    <Link to="/newsletter-article-page">Articles</Link>
                                </li> */}
                                <li>
                                    <Link to="/newsletter-alert-page">Alert</Link>
                                </li>
                                {/* <li>
                                    <Link to="/newsletter-def-page">Def-Sec Wives</Link>
                                </li> */}
                            </ul>
                            <div className="sm-links">
                                <ul>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}