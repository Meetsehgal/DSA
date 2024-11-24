import { Link } from "react-router-dom";
import Insigina from "../../../assets/img/defsecedu/Group 925.png";
import Awards from "../../../assets/img/defsecedu/Group 927.png";
import Careers from "../../../assets/img/defsecedu/Group 965.png";
import "./MagazineDegSecWivesSection.css";

export default function MagazineDegSecWivesSection({ insignia, awards, careers }) {

    return (
        <section className="section-spacing magazine-deg-sec-wives-section">
            <div className="container-fluid mt-lg-4">
                <div className="row">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="top-section">
                            <div className="image-section">
                                <div className="main-heading">
                                    <h2>
                                        Def-sec <span>edu</span>
                                    </h2>
                                </div>
                                <div className="image ">
                                  <img src={Insigina} className="img-fluid" alt="Insigina" />
                                  <p>Insigina</p>
                                </div>
                                <div className="image">
                                <img src={Awards} className="img-fluid" alt="Awards" />
                                <p>Awards</p>
                                </div>
                                <div className="image">
                                <img src={Careers} className="img-fluid" alt="Careers" />
                                <p>Careers</p>
                                </div>
                            </div>

                            {/* <p>
                                Enhance your knowledge with our curated educational resources, designed for students, academics, and professionals pursuing careers in the defence field.
                            </p> */}

                        </div>
                        <div className="bottom-section">
                            {/* <img src="https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/Indian+Army.png" className="img-fluid" alt="" /> */}
                            <div className="content">
                                <h2>
                                    learn with us
                                </h2>
                                <p>
                                Get to know the Indian Armed Forces, our nation's defenders across land, air and sea, standing guard to protect and secure us from every threat.
                                </p>

                                 <div className="col-12 "> 
                                    <Link to="/def-sec-edu" className="theme-btn know-more">Know more</Link>
                                </div> 

                                {/* <div className="col-12 text-center">
                              <Link to="/def-sec-edu" className="theme-btn">Know more</Link>
                              </div> */}

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="top-heading">
                            <h4>Stay updated with us</h4>
                            {/* <p className="w-75 mx-auto">learn career opportunities with DSA learn career 
                            opportunities with DSA learn career opportunities with DSA</p> */}
                            <p className="w-75 mx-auto"> Tri-Services</p>
                        </div>
                        {insignia?.map((data)=>{
                            return(
                            <div className="personal-card">
                            <div className="image">
                                <img src={data?.fld_thumbnail} className="img-fluid" alt={data?.fld_alt} />
                            </div>
                            <div className="content">
                                <h4>
                                    {data?.fld_category}
                                </h4>
                                <p>{data?.fld_short_desc}</p>
                            </div>
                        </div>
                            )
                        })}
                    </div>
 
                     {/* <div className="col-12 text-center">
                        <Link to="/def-sec-edu" className="theme-btn">Know more</Link>
                    
                </div>  */} 

                </div>
            </div>
        </section>
    )
}