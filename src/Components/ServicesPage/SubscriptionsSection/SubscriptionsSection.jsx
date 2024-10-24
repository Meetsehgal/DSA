import { MdExpandCircleDown } from "react-icons/md";
import DigitalIcon from "../../../assets/img/icons/digital.png";
import PrintIcon from "../../../assets/img/icons/print.png";
import "./SubscriptionsSection.css";
export default function SubscriptionsSection() {
    return (
        <section className="section-spacing subscriptions-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 top-section">
                        <div className="main-heading">
                            <h2>A. DSA <span>subscriptions</span></h2>
                        </div>
                        <div className="d-flex gap-5">
                            <div className="sub-btn">
                                <img src={DigitalIcon} alt="" /> Digital
                            </div>
                            <div className="sub-btn">
                                <img src={PrintIcon} alt="" /> print
                            </div>
                        </div>
                        <div className="divider">
                            <MdExpandCircleDown />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="main-heading mt-4">
                            <h2>1. Digital <span>subscription</span></h2>
                        </div>
                        <div className="my-4 d-flex">
                            {/* Current Annual Edition Card */}
                            <div className="subscription-card mx-2">
                                <h5 className="subscription-card-title">CURRENT ANNUAL Edition</h5>
                                <h3 className="subscription-card-price">USD 15 <span className="subscription-card-year">Per Year</span></h3>
                                <p className="mb-3">Subscriptions</p>
                                <p className="subscription-card-text">Access Both The DSA's Website And Digital Magazine.</p>
                                <ul className="features-list">
                                    <li>The DSA Website</li>
                                    <li>The DSA Magazine Latest Editions</li>
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
                                <p className="subscription-card-text">Access Both The DSA's Website And Digital Magazine.</p>
                                <ul className="features-list">
                                    <li>The DSA Website</li>
                                    <li>The DSA Magazine Editions</li>
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
                    <div className="col-12">
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
                </div>
            </div>
        </section>
    )
}