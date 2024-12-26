import NoImg from "../../../assets/img/no-image.jpg";
import "./AddBanner.css";
export default function AddBanner({banners}) {
    return(
        <section className="add-banner">
            <img src={banners[0]?.fld_desktop_image} className="img-fluid" alt={banners[0]?.fld_alt} />
        </section>
    )
}