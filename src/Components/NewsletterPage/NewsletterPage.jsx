import BrandParttern from "../Home/BrandParttern/BrandParttern";
// import DegSecWivesSection from "../Home/DegSecWivesSection/DegSecWivesSection";
import NewsletterSection from "../Home/NewsletterSection/NewsletterSection";
import AboutNewsletterSection from "./AboutNewsletterSection/AboutNewsletterSection";
import DsaAlertsSection from "./DsaAlertsSection/DsaAlertsSection";
// import DsaArticlesSection from "./DsaArticlesSection/DsaArticlesSection";
import NavigationSection from "./NavigationSection/NavigationSection";
import "./NewsletterPage.css";

import React, { useState, useEffect } from 'react';
import PostApiCall from "../../Helpers/Api/PostApi";


export default function NewsletterPage() {

    const [newsLetterAlertData, setNewsLetterAlertData] = useState([]);

    const getNewsLetterAlertData = () => {
        PostApiCall.postRequest({ whereClause: "" }, "GetNewsAlert").then((results) => {
            results.json().then((obj) => {
                if (results.status === 200 || results.status === 201) {
                    setNewsLetterAlertData(obj.data);
                } else {
                    // notification.error({
                    //   message: `Notification error`,
                    //   description: obj.data,
                    // });
                }
            })
        })
    }

    useEffect(() => {
        getNewsLetterAlertData();
    }, [])

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    return (
        <div className="newsletter-page">
            <NavigationSection />
            <AboutNewsletterSection />
            <NewsletterSection />
            <BrandParttern />
            {/* <div className="my-5 pt-5">
                <DsaArticlesSection />
            </div> */}
            <DsaAlertsSection newsLetterAlertData={newsLetterAlertData}/>
            {/* <DegSecWivesSection /> */}
        </div>
    )
}