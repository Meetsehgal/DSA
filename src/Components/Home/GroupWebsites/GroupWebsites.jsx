import "./GroupWebsites.css";
import Img1 from "../../../assets/img/group-websites/ocean-books-logo.jpg";
import Img2 from "../../../assets/img/group-websites/ocian-media.png";
import Img3 from "../../../assets/img/group-websites/prabhat-exam-logo-blue.png";
import Img4 from "../../../assets/img/group-websites/prabhatprakashan.png";
import Img5 from "../../../assets/img/group-websites/sahityaamtrit.png";
export default function GroupWebsites() {
    return (
        <section className="section-spacing my-5 group-company-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 ">
                        <h2 className="main-heading text-center">
                            <span>Group</span> websites
                        </h2>
                    </div>
                    <div className="col-12 company-card">
                        <a href="https://sahityaamrit.in/" target="_blank">
                            <img src={Img5} className="img-fluid" alt="" />
                        </a>
                        <a href="https://www.prabhatexam.com/" target="_blank">
                            <img src={Img3} className="img-fluid" alt="" />
                        </a>
                        <a href="https://www.prabhatbooks.com/" target="_blank">
                            <img src={Img4} className="img-fluid object-fit-cover p-0" alt="" />
                        </a>
                        <a href="https://www.oceanmedia.in/" target="_blank">
                            <img src={Img2} className="img-fluid" alt="" />
                        </a>
                        <a href="https://sahityaamrit.in/" target="_blank">
                            <img src={Img1} className="img-fluid" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}