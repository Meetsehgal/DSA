import "./EditionsAboutSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";


export default function EditionsAboutSection({ data }) {


    return (
        <section className="section-spacing pt-4 editions-about-section">
            <div className="container-fluid">
                {data?.map((item, id) => {
                    return (
                        <div className="row justify-content-between" key={id}>
                            <div className="col-lg-7">
                                <h2 className="main-heading">
                                    {item?.fld_heading}
                                </h2>
                                <p>
                                    {item?.fld_short_desc}
                                </p>

                            </div>
                            <div className="col-lg-4 text-end ps-lg-4 mt-5 mt-lg-0">
                                <img src={item?.fld_image} className="img-fluid" alt={item?.fld_alt} />
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}