import { FaFacebookF, FaInstagramSquare , FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./NavigationSection.css";
import SocialIcons from "../../SocialIcons/SocialIcons";
export default function NavigationSection() {
    return (
        <section className="section-spacing px-0 my-2 magazine-navigation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="main-heading">DefenCe <span>&</span> security Alert</h1>
                        <div className="navigation-bar">
                            <p className="name">
                                Magazine
                            </p>
                            <ul className="inner-links">
                                <li>
                                    <Link to="/editions">Editions</Link>
                                </li>
                                <li>
                                    <Link to="/articles">Articles</Link>
                                </li>
                                <li>
                                    <Link to="/podcast-and-events">Podcast</Link>
                                </li>
                                <li>
                                    <Link to="/def-sec-edu">Def-Sec Edu</Link>
                                </li>
                            </ul>
                            <div className="sm-links">
                                <ul>
                                    <SocialIcons/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}