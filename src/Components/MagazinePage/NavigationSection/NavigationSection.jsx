import { FaFacebookF, FaInstagramSquare , FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { Link,NavLink } from "react-router-dom";
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
                            {/* <p className="name">
                                Magazine
                            </p> */}
                            <p className="name">
                              <NavLink to="/magazine">Magazine</NavLink>
                              </p> 


                            <ul className="inner-links">
                                <li>
                                    <NavLink to="/editions">Editions</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/articles">Articles</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/podcast-and-events">Podcast</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/def-sec-edu">Def-Sec Edu</NavLink>
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