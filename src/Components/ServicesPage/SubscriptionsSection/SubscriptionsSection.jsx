import { MdExpandCircleDown } from "react-icons/md";
import DigitalIcon from "../../../assets/img/icons/digital.png";
import PrintIcon from "../../../assets/img/icons/print.png";
import "./SubscriptionsSection.css";
import ServiceContactForm from "../ServiceContactForm/ServiceContactForm";
import { useState } from "react";
export default function SubscriptionsSection() {

const [showSubscription,setShowSubscription ] =useState(true);
const [showAdvertising,setShowAdvertising]=useState(true);
const [showSponsorship,setShowSponsorship]=useState(false);
const [showContributor,setShowContributor]=useState(false);



const advertisingHandleClick=()=>{
    setShowAdvertising(true);
    setShowSponsorship(false);
    setShowContributor(false);
}

const sponsorshipHandleClick=()=>{
    setShowSponsorship(true);
    setShowAdvertising(false);
    setShowContributor(false);
}
const contributorHandleClick=()=>{
    setShowContributor(true);
    setShowAdvertising(false);
    setShowSponsorship(false);


}


const digitalHandleClick=()=>{
    setShowSubscription(true);
}

const printHandleClick=()=>{
    setShowSubscription(false);
}

    return (
        <section className="section-spacing subscriptions-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 top-section">
                        <div className="main-heading">
                            <h2>A. <i>DSA</i> <span>subscriptions</span></h2>
                        </div>
                        <p>DSA offers are for online and print magazine. Stay ahead with our in-depth defence and security worldwide insights! Subscribe now for exclusive online access to expert analysis and the latest updates.</p>
                        <div className="d-flex gap-4 gap-lg-5 mt-4 mt-lg-5">
                            <div className={`sub-btn ${showSubscription?"active":""}`} onClick={digitalHandleClick}>
                            
                                <img className={showSubscription?"active":""} src={DigitalIcon} alt="" /> Digital
                            </div>
                            <div className={`sub-btn ${showSubscription?"":"active"}`} onClick={printHandleClick}>
                                <img src={PrintIcon} alt="" /> print
                            </div>
                        </div>
                        <div className="divider">
                            <MdExpandCircleDown />
                        </div>
                    </div>

{/* onClick of digital show the    digital subscription other wise show the print Subscription */}

                 {showSubscription?  <div className="col-12 my-5">
                        <div className="main-heading mt-4">
                            <h2>1. Digital <span>subscription</span></h2>
                        </div>
                        <div className="my-4 d-flex flex-column flex-lg-row">
                            {/* Current Annual Edition Card */}
                            <div className="subscription-card mb-5 mb-lg-0 mx-2">
                                <h5 className="subscription-card-title">CURRENT ANNUAL Edition</h5>
                                <h3 className="subscription-card-price">USD 15 <span className="subscription-card-year">Per Year</span></h3>
                                <p className="mb-3">Subscriptions</p>
                                <p className="subscription-card-text">Access Both The <i>DSA's</i> Website And Digital Magazine.</p>
                                <ul className="features-list">
                                    <li>The <i><span> DSA </span></i> Website</li>
                                    <li>The <i>DSA</i> Magazine Latest Editions</li>
                                    <li>Newsletters</li>
                                    <li>No Third-Part Advertising</li>
                                    <li>Subscription Validity One Year</li>
                                </ul>
                                <button className="btn proceed-btn">Proceed</button>
                            </div>

                            {/* Editions Card */}
                            <div className="subscription-card mx-2">
                                <h5 className="subscription-card-title">EDITIONS</h5>
                                <h3 className="subscription-card-price">USD 1.25 <span className="subscription-card-year">Per Edition</span></h3>
                                <p className="mb-3">Subscriptions</p>
                                <p className="subscription-card-text">Access Both The <i>DSA's</i> Website And Digital Magazine.</p>
                                <ul className="features-list">
                                    <li>The <i>DSA</i> Website</li>
                                    <li>The <i>DSA</i> Magazine Editions</li>
                                    <li>Newsletters</li>
                                    <li>No Third-Part Advertising</li>
                                    <li>Choose Your Edition</li>
                                </ul>
                                <button className="btn proceed-btn">Proceed</button>
                            </div>
                        </div>
                        <div className="divider">

                        </div>
                    </div>
                    
                    
                    
                    
                    :




                        // Print Subscription
                    <div className="col-12 mb-lg-5">
                        <div className="main-heading mt-4">
                            <h2>2. print <span>subscription</span></h2>
                        </div>
                        <div className="subscription-container">
                            {/* For Local Subscriptions */}
                            <div className="subscription-section">
                                <p className="mb-2">Subscriptions</p>
                                <table className="subscription-table">
                                    <thead>
                                        <tr>
                                            <th>Tenure</th>
                                            <th>Cover Page</th>
                                            <th>Discount</th>
                                            <th>Discounted Price</th>
                                            <th>Shipping Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 Year</td>
                                            <td>RS. 1800</td>
                                            <td>20%</td>
                                            <td>RS. 1400</td>
                                            <td>Rs 640</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* For SAARC Countries */}
                            <div className="subscription-section">
                                <h4>For SAARC Countries</h4>
                                <p className="mb-2">Subscriptions</p>
                                <table className="subscription-table">
                                    <thead>
                                        <tr>
                                            <th>Tenure</th>
                                            <th>Cover Page</th>
                                            <th>Discount</th>
                                            <th>Discounted Price</th>
                                            <th>Shipping Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 Year</td>
                                            <td>US $ 300</td>
                                            <td>10%</td>
                                            <td>US $ 270</td>
                                            <td>US $ 500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* For The Rest of the World */}
                            <div className="subscription-section">
                                <h4>For The Rest Of The World</h4>
                                <p className="mb-2">Subscriptions</p>
                                <table className="subscription-table">
                                    <thead>
                                        <tr>
                                            <th>Tenure</th>
                                            <th>Cover Page</th>
                                            <th>Discount</th>
                                            <th>Discounted Price</th>
                                            <th>Shipping Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 Year</td>
                                            <td>US $ 360</td>
                                            <td>10%</td>
                                            <td>US $ 324</td>
                                            <td>US $ 600</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                                
                  }




                </div>

{/* first contact from not show in digital section but show in print section  */}

              {showSubscription?"":
                 <div className="py-5 my-5 contact-form-bg">
                    <div className="col-lg-8 mx-auto ">
                        <ServiceContactForm />
                    </div>
                </div> 
}




            {/* B. Associate with DSA Section*/}
 
              

                <div className="row my-5">
                    <div className="col-12 mt-5 top-section">
                        <div className="main-heading">
                            <h2>B. Associate <span>with <i>DSA</i></span></h2>
                        </div>
                        <p className="bottom-p">Explore opportunities to partner with us, whether as a contributor, advertiser, or collaborator. Let's work together to advance the defense and security dialogue.</p>
                        <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 mt-5">
                            {/* <div className="sub-btn">
                                Partnership Opportunities
                            </div> */}
                            <div className={`sub-btn ${showAdvertising?"active":""}`} onClick={advertisingHandleClick}>
                                Advertising 
                            </div>

                            <div className={`sub-btn ${showSponsorship?"active":""}`}onClick={sponsorshipHandleClick}>
                                Sponsorship
                            </div>
                            
                            <div className={`sub-btn ${showContributor?"active":""}`} onClick={contributorHandleClick}>
                                Contributor
                            </div>

                        </div>
                        <div className="divider">
                            <MdExpandCircleDown />
                        </div>
                    </div>



                    <div className="col-12 my-5">

                       {showAdvertising ? 

                        <div className="d-flex mt-5">
                            <div className="no">
                                1.
                            </div>
                            <div>
                                <div className="main-heading">
                                    <h2>
                                        Advertising with DSA
                                    </h2>
                                </div>
                                <p className="bottom-p">Maximize your visibility through our tailored advertising packages, designed to connect your brand with key decision-makers and professionals in the defense industry.</p>
                            </div>
                        </div>
                        :""}




                        {showSponsorship?


                        <div className="d-flex mt-5">
                            <div className="no">
                                2.
                            </div>
                            <div>                                
                                <div className="main-heading">
                                    <h2>
                                        Sponsorship with DSA
                                    </h2>
                                </div>
                                <p className="bottom-p">Support <i>DSA's</i> initiatives through sponsorship and gain exclusive recognition across our platforms, aligning your brand with excellence in defense journalism.</p>
                            </div>
                        </div>
                        :""}


                         {showContributor?


                        <div className="d-flex mt-5">
                            <div className="no">
                                3.
                            </div>
                            <div>                                
                                <div className="main-heading">
                                    <h2>
                                        Contributor  with DSA
                                    </h2>
                                </div>
                                <p className="bottom-p">Support <i>DSA's</i> Contributor through sponsorship and gain exclusive recognition across our platforms, aligning your brand with excellence in defense journalism.</p>
                            </div>
                        </div>
                        :""}
 
                       

                    </div>
                </div>




                  
                          {/* : */}



 
                         



                    {/* <div className="col-12 my-5"> */}
                        {/* <div className="d-flex mt-5">
                            <div className="no">
                                1.
                            </div>
                            <div>
                                <div className="main-heading">
                                    <h2>
                                        Partnership <span>opportunities</span>
                                    </h2>
                                </div>
                                <p className="bottom-p">Collaborate with <i>DSA</i> to amplify your brand's and products reach in the defense and security sector. Partner with us to engage with a dedicated audience and enhance your impact.</p>
                            </div>
                        </div>
                        <div className="d-flex mt-5">
                            <div className="no">
                                2.
                            </div>
                            <div>
                                <div className="main-heading">
                                    <h2>
                                        Advertising <span>packages</span>
                                    </h2>
                                </div>
                                <p className="bottom-p">Maximize your visibility through our tailored advertising packages, designed to connect your brand with key decision-makers and professionals in the defense industry.</p>
                            </div>
                        </div> */}


                        {/* <div className="d-flex mt-5">
                            <div className="no">
                                1.
                            </div>
                            <div>

                                
                                <div className="main-heading">
                                    <h2>
                                        Sponsorship  with DSA
                                    </h2>
                                </div>
                                <p className="bottom-p">Support <i>DSA's</i> initiatives through sponsorship and gain exclusive recognition across our platforms, aligning your brand with excellence in defense journalism.</p>
                            </div>
                        </div> */}
                    {/* </div> */}
                {/* </div>  */} 
                
                


{/*  

                      {/* }  */}






                <div className="py-lg-5 mt-lg-5 bottom-contact-form">
                    <div className="col-lg-8 contact-form-bg mx-auto">
                        <ServiceContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}