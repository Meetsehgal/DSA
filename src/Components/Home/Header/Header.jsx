import MainNavbar from "../../MainNavbar/MainNavbar";
import "./Header.css";
import Flag from "../../../assets/img/indian-flag.jpg";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import SocialIcons from "../../SocialIcons/SocialIcons";
export default function Header() {
    return (
        <>
            <header className="px-lg-2 home-header">
                {/* <MainNavbar /> */}
                <div className="container-fluid pt-lg-5">
                    <div className="content px-lg-3 pt-lg">
                        <div className="left-content  d-lg-flex">
                            <div className="d-flex align-items-end">
                                <p className="name">
                                    Defence <span>&</span></p>
                                <h1>Committed to Defence <br /> and Security Worldwide</h1>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="logo">
                                    <img src={Flag} className="img-fluid" alt="Indian Flag" />
                                </div>
                                <p className="name">
                                    Security Alert
                                </p>
                            </div>
                        </div>


                         {/* <div className="left-content d-block d-lg-none">
                            <h1>Commited to Defence <br /> and Security Worlwide</h1>
                            <div className="d-block  align-items-end">
                                <div className="d-flex mb-2">
                                    <p className="name">
                                        Defence <span>&</span></p>
                                    <div className="logo">
                                         <img src={Flag} className="img-fluid" alt="Indian Flag" />
                                    </div>

                                </div>
                                <p className="name">
                                    Security Alert
                                </p>

                            </div>
                            {/* <div className="d-flex align-items-center"> */}
                            {/* <div className="logo">
                                    <img src={Flag} className="img-fluid" alt="Indian Flag" />
                                </div>
                                <p className="name">
                                    Security Alert
                                </p> */}
                            {/* </div> */}
                             {/* </div> */}



                        <div className="right-sm-links pb-lg-3 mb-lg-1">
                            <ul>
                                <SocialIcons/>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}