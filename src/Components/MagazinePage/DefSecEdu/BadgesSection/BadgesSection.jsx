import "./BadgesSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
import React, { useState, useEffect } from "react";

export default function BadgesSection({data, type, setType}) {



    const [filteredData, setFilteredData] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("Commissioned")
    const getFilteredData = (badgeType) => {
            const filtered = data?.filter(item => 
                // item?.fld_badge_type === badgeType &&
                 item?.fld_category === type.defenceForceType
            );
            const allBadges = filtered?.flatMap(item => JSON.parse(item?.badges));
            const filteredBadges = allBadges?.filter(item => item.badge_type === badgeType)
            setFilteredData(filteredBadges);
            setCurrentCategory(badgeType)
    }

    useEffect(() => {
        const defaultData = data?.filter(item => 
            // item?.fld_badge_type === "Commissioned" &&
             item?.fld_category ===
            //  type.defenceForceType ||
             "Indian Army")
        const allBadges = defaultData?.flatMap(item => JSON.parse(item?.badges));
        const filteredBadges = allBadges?.filter(item => item.badge_type === "Commissioned")
        setFilteredData(filteredBadges);
    }, [data,type]);

    useEffect(()=>{
        getFilteredData(currentCategory)
    },[type.defenceForceType])

    return (
        <section className="section-spacing badges-section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="heading">
                            All Badges of the {type.defenceForceType} and Their Meaning
                        </h2>
                    </div>
                    <div className="col-lg-7 mb-4 mx-auto">

                        <div className="badge-category">
                            <ul>
                                <li className={currentCategory === "Commissioned" ? "defsec-cat Active": "defsec-cat"} onClick={() => getFilteredData("Commissioned")}>
                                    <p>Commissioned</p>
                                </li>
                                <li className={currentCategory === "Junior Commissioned" ? "defsec-cat Active": "defsec-cat"} onClick={() => getFilteredData("Junior Commissioned")}>
                                    <p>Junior Commissioned</p>
                                </li>
                                <li className={currentCategory === "Non- Commissioned" ? "defsec-cat Active": "defsec-cat"} onClick={() => getFilteredData("Non- Commissioned")}>
                                    <p>Non-Commissioned</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-12">
                        <div className="badge-card-box">
                            <div className="top-section">
                                <div className="top-card">
                                    <h3>Badges</h3>
                                    <p>Images</p>
                                </div>
                                <div className="top-card">
                                    <h3>Badges</h3>
                                    <p>Names</p>
                                </div>
                                <div className="top-card">
                                    <h3>Ranks</h3>
                                    <p>Categorization</p>
                                </div>
                                <div className="top-card">
                                    <h3>Details</h3>
                                    <p>Badges</p>
                                </div>
                            </div>
                            {filteredData?.sort((a,b)=>a.badge_sequence - b.badge_sequence).map((item, id) => {
                                    return (<div className="badge-card" key={id}>
                                        <div className="image">
                                            <img src={item?.badge_image} className="img-fluid" alt={item?.badge_alt} />
                                        </div>
                                        <div>
                                            <h4>
                                                {item?.badge_name}
                                            </h4>
                                        </div>
                                        <div>
                                            <h4>
                                                {item?.badge_type}
                                            </h4>
                                        </div>
                                        <div>
                                            <p>{item?.badge_desc}</p>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}