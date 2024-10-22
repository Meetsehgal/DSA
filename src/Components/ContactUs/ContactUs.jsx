import NoImg from "../../assets/img/no-image.jpg";
import "./ContactUs.css";
import ContactUsBanner from "./ContactUsBanner/ContactUsBanner";
import ContactUsMissionSection from "./ContactUsMissionSection/ContactUsMissionSection";
import ContactUsServiceSection from "./ContactUsServiceSection/ContactUsServiceSection";
export default function ContactUs() {
    return (
        <>
            <ContactUsBanner />
            <ContactUsMissionSection />
            <ContactUsServiceSection />
        </>
    )
}