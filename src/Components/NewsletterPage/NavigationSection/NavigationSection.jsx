import { Link } from "react-router-dom";
import "./NavigationSection.css";
import SocialIcons from "../../SocialIcons/SocialIcons";
export default function NavigationSection() {
    return (
        <section className="section-spacing px-0 mb-5 magazine-navigation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="main-heading">DefenCe <span className="and-font">&</span> security Alert</h1>
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