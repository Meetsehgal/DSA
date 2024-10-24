import { useEffect, useState } from "react";
import AbouUsSection from "../Components/Home/AbouUsSection/AbouUsSection";
import AddBanner from "../Components/Home/AddBanner/AddBanner";
import ArticlesSection from "../Components/Home/ArticlesSection/ArticlesSection";
import BrandParttern from "../Components/Home/BrandParttern/BrandParttern";
import CurrentAffairs from "../Components/Home/CurrentAffairs/CurrentAffairs";
import DegSecWivesSection from "../Components/Home/DegSecWivesSection/DegSecWivesSection";
import DsaUpsSection from "../Components/Home/DsaUpsSection/DsaUpsSection";
import GroupWebsites from "../Components/Home/GroupWebsites/GroupWebsites";
import Header from "../Components/Home/Header/Header";
import HomeBanner from "../Components/Home/HomeBanner/HomeBanner";
import InstagramFeed from "../Components/Home/InstagramFeed/InstagramFeed";
import MilestoneSection from "../Components/Home/MilestoneSection/MilestoneSection";
import NewsletterSection from "../Components/Home/NewsletterSection/NewsletterSection";
import PodcastSection from "../Components/Home/PodcastSection/PodcastSection";
import ServiceSection from "../Components/Home/ServiceSection/ServiceSection";
import TestimonialSection from "../Components/Home/TestimonialSection/TestimonialSection";
import GetApiCall from "../Helpers/Api/GetApi";
import MainFooter from "../Components/MainFooter/MainFooter";
// import MainNavbar from "../Components/MainNavbar/MainNavbar";
import SubImg from "../assets/img/sub.png"
export default function Home() {

  const [bannersData, setBannersData] = useState([]);
  const [newsLetterData, setNewsLetterData] = useState([]);

  useEffect(()=>{
        getBanners();
        getNewsLetter();
    },[])

    const getBanners = ()=>{
        GetApiCall.getRequest("GetBanners"
          ).then((results) => {
            results.json().then((obj) => {
              if (results.status === 200 || results.status === 201) {
                setBannersData(obj.data);               
              } else {
                // notification.error({
                //   message: `Notification error`,
                //   description: obj.data,
                // });
              }
            });
          });
    }

    const getNewsLetter = () => {
      GetApiCall.getRequest("GetNewsLetter").then((results)=> {
        results.json().then((obj) => {
          if (results.status === 200 || results.status === 201) {
            setNewsLetterData(obj.data); 
        }else {
          // notification.error({
          //   message: `Notification error`,
          //   description: obj.data,
          // });
          }
        })
      })
    }

    console.log(newsLetterData,"hkhkj")



    const filteredHomeBanners = bannersData?.filter((item)=> item?.fld_pagename === "Home" && item?.fld_location === "Main")
    const fliteredAboutUsBanners = bannersData?.filter((item)=> item?.fld_pagename === "Home" && item?.fld_location === "AboutUs")
    const fliteredTestimonialsBanners = bannersData?.filter((item)=> item?.fld_pagename === "Home" && item?.fld_location === "TestiMonials")

    const filteredNewsletterSectionBanners = newsLetterData?.filter((item) => item?.fld_type === "MainNews")

    const filteredPodcastSectionBanners = newsLetterData?.filter((item) => item?.fld_type === "PodCast")
    const filteredCurrentAffairsBanners = newsLetterData?.filter((item) => item?.fld_type === "CurrentAffairs")
    


    return (
        <>
            {/* <MainNavbar /> */}
            <Header />
            <HomeBanner banners = {filteredHomeBanners} />
            <NewsletterSection banners = {filteredNewsletterSectionBanners}/>
            <BrandParttern />
            <CurrentAffairs banners = {filteredCurrentAffairsBanners}/>
            <AbouUsSection banners = {fliteredAboutUsBanners} />
            <MilestoneSection />
            <ServiceSection />
            <ArticlesSection />
            <DegSecWivesSection />
            <AddBanner banners = {fliteredTestimonialsBanners}/>
            <PodcastSection banners = {filteredPodcastSectionBanners}/>
            <TestimonialSection/>
            <GroupWebsites />
            <InstagramFeed />
            <DsaUpsSection />
            <img src={SubImg} className="img-fluid sub-img" alt="" />
            <MainFooter />
        </>
    )
}