import React, { useState, useEffect, useContext } from 'react';
import DsaArticlesSection from "../NewsletterPage/DsaArticlesSection/DsaArticlesSection";
import MagazineDegSecWivesSection from "./MagazineDegSecWivesSection/MagazineDegSecWivesSection";
import "./MagazinePage.css";
import MagazinePageContentSection from "./MagazinePageContentSection/MagazinePageContentSection";
import MagazinePageTopSection from "./MagazinePageTopSection/MagazinePageTopSection";
import NavigationSection from "./NavigationSection/NavigationSection";
import DsaAuditSection from "./PodcastEventsPage/DsaAuditSection/DsaAuditSection";
import PostApiCall from "../../Helpers/Api/PostApi";
import { store } from "../../Helpers/Store/Store";

export default function  MagazinePage() {
    
    const [podCastData, setPodCastData] = useState([]);
    const [magazinesEditionData, setMagazinesEditionData] = useState([]);
    const [articleData, setArticleData] = useState([]);
    const { defSecEduData, setDefSecEduData } = useContext(store);

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    const fetchData = async (endpoint, setData) => {
        try {
            const results = await PostApiCall.postRequest({ whereClause: "" }, endpoint);
            const obj = await results.json();
            if (results.status === 200 || results.status === 201) {
                setData(obj.data);
            } else {
                console.error(`Error fetching ${endpoint}:`, obj.data);
            }
        } catch (error) {
            console.error(`Error fetching ${endpoint}:`, error);
        }
    };

    useEffect(() => {
        fetchData("GetEditions", setMagazinesEditionData);
        fetchData("GetMagazineArticles", setArticleData);
        fetchData("GetPodcast", setPodCastData);
        fetchData("GetDefSecEdu", setDefSecEduData);
    }, []);

    const latestDataEdition = magazinesEditionData?.filter(item => item?.fld_status === "new" || item?.fld_status === "Upcoming");
    const latestArticle = articleData?.filter(item => item?.fld_status === "NEW" || item?.fld_status === "Upcoming");
    const insignia = defSecEduData?.filter(item => item?.fld_type === "Insignia");
    const awards = defSecEduData?.filter(item => item?.fld_type === "Awards");
    const careers = defSecEduData?.filter(item => item?.fld_type === "Careers");

    return (
        <div className="magazine-page">
            <NavigationSection />
            <MagazinePageTopSection data={latestDataEdition} />
            <MagazinePageContentSection />
            <DsaArticlesSection data={latestArticle} />
            <DsaAuditSection />
            <MagazineDegSecWivesSection insignia={insignia} awards={awards[0]} careers={careers[0]} />
        </div>
    );
}
