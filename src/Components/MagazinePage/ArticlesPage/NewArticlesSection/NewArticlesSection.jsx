import moment from "moment";
import "./NewArticlesSection.css";
export default function NewArticlesSection({data}) {
    return (
        <section className="section-spacing pt-0 new-articles-section">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="main-heading">
                            {data[0]?.fld_heading}
                        </h2>
                    </div>
                    <div className="col-lg-8">
                        <p>
                        {data[0]?.fld_short_desc}
                        </p>
                        <div className="d-flex gap-5 text-capitalize mt-4">


                            <b>
                                published by - {data[0]?.fld_published_by}
                            </b>
                            <b>
                                Date - {moment(data[0]?.fld_createdon).format('MMMM D, YYYY')}
                            </b>
                            <b>Time - {moment(data[0]?.fld_createdon).format('HH:mm:ss')}</b>
                        </div>
                    </div>
                    <div className="col-12">
                        <img src={data[0]?.fld_image} className="img-fluid" alt={data[0]?.fld_alt} />
                    </div>
                </div>
            </div>
        </section>
    )
}