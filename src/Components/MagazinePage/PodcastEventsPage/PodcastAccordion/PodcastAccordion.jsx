import { Collapse } from 'antd';
import NoImg from "../../../../assets/img/no-image.jpg";
import "./PodcastAccordion.css";
import { FaYoutube } from 'react-icons/fa';
import moment from 'moment';
export default function PodcastAccordion({ podcastdata }) {
    const text = <></>;
    const items = podcastdata?.map((data, i) => {
        return ({
            key: data.fld_id,
            label: <div className="podcast-card">
                <div className="d-flex">
                    <div className="number">
                        0{i + 1}
                    </div>
                    <div className="image">
                        <img src={data.fld_image} className='img-fluid' alt={data.fld_alt} />
                    </div>
                </div>
                <div className="content">
                    <div className="heading">
                        <h4>
                            {data.fld_heading}
                        </h4>
                        <p>{data.fld_short_desc}</p>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, explicabo?</p> */}

                    </div>
                    <div className="date flex-wrap d-flex gap-4 gap-lg-5">
                        <div className="box">
                            <p>
                                Date-
                            </p>
                            <p>{moment(data?.fld_createdon).format('MMMM D, YYYY')}</p>
                        </div>
                        <div className="box">
                            <p>
                                Time-
                            </p>
                            <p>{moment(data?.fld_createdon).format('HH:mm:ss')}</p>
                        </div>
                    </div>
                </div>
            </div>,
            children: <div className='bottom-content'>
                <div className="d-flex youtube-link justify-content-between">
                    <p>Listed on</p>
                    <a href={data.fld_redirect_url} target="_blank"><FaYoutube /></a>
                </div>
                <div className='content'>
                    <p>{data.fld_long_desc}</p>
                    <a href={data.fld_redirect_url} target="_blank" className='theme-btn fs-6' rel="noopener noreferrer">Full podcast</a></div>
            </div>,
        }
        )
    })
    return (
        <section className="section-spacing  mb-lg-5 podcast-detail-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Collapse accordion items={items} bordered={false} defaultActiveKey={['1']} />
                    </div>
                </div>
            </div>
        </section>
    )
}