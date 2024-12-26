import { Link } from "react-router-dom";
// import Left from "../../../assets/img/man.jpg";
// import Right from "../../../assets/img/Pawan-Agrawal.webp";
import Left1 from "../../../assets/img/about/Manvendra Singh (Right).png";
import Right1  from "../../../assets/img/about/Pawan ji.png";

import "./CeoSection.css";
export default function CeoSection() {
    return (
        <section className="section-spacing ceo-section my-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-5 pe-md-5 pe-lg-5">
                        <div className="ceo-card">
                            <img src={Left1} className="img-fluid" alt="" />
                            <p className="name">
                                Manvendra  Singh 
                            </p>
                            <span>
                                Editor-in-Chief
                            </span>
                            <div className="text-end">
                                <Link to="/articles" >Read The Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 ps-md-5 ps-lg-5">
                        <div className="ceo-card mb-0">
                            <img src={Right1} className="img-fluid" alt="" />
                            <p className="name">
                                Pawan agrawal
                                {/* Pawan <span>agarwal</span> */}
                            </p>
                            <span>
                                Publisher & CEO
                            </span>
                            <div className="text-end">
                                <Link to="/articles" >Read The Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}