import { useEffect } from "react";
import AboutGallerySection from "../Components/AboutUs/AboutGallerySection/AboutGallerySection";
import AboutPageHeader from "../Components/AboutUs/AboutPageHeader/AboutPageHeader";
import CeoSection from "../Components/AboutUs/CeoSection/CeoSection";
import DsaUps from "../Components/AboutUs/DsaUps/DsaUps";
import FounderSection from "../Components/AboutUs/FounderSection/FounderSection";
import JourneySection from "../Components/AboutUs/JourneySection/JourneySection";
import VisionSection from "../Components/AboutUs/VisionSection/VisionSection";
// import GroupWebsites from "../Components/Home/GroupWebsites/GroupWebsites";
import MilestoneSection from "../Components/Home/MilestoneSection/MilestoneSection";
// import TestimonialSection from "../Components/Home/TestimonialSection/TestimonialSection";


export default function AboutUs() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    return (
        <div className="about-us-page">
            <AboutPageHeader />
            <MilestoneSection HeadingText={"15 years Journey so far through the key milestones that have defined DSA’s growth and impact in defence journalism. From our inception to becoming a globally recognized research based publication, see how we’ve evolved over the years."} />
            <VisionSection />
            <DsaUps />
            <FounderSection /> 
            <CeoSection />
            <JourneySection />
            <AboutGallerySection />
        </div>
    )
}