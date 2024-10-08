import "./TopSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
export default function TopSection() {
    return (
        <section className="section-spacing pt-0 top-section-section">
            <div className="container-flid">
                <div className="row">
                    <div className="col-lg-5 position-relative">
                        <img src={NoImg} className="img-fluid" alt="" />
                        <div className="content">
                            <h2 className="main-heading">
                                DEF- SEC EDU
                            </h2>
                            <p>
                                Why we are starting this and motive behind this
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}