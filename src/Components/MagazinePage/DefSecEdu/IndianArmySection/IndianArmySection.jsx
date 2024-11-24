import LeftBanner from "../../../../assets/img/left-banner.png";
import "./IndianArmySection.css";
import Flag from "../../../../assets/img/flag.png";
import { useEffect, useState } from "react";

export default function IndianArmySection({data, setDefenceForceType}) {

    const [filteredData, setFilteredData] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("Indian Army");
   
  
    const getFilteredData = (defenceForceType) => {
            setDefenceForceType((prevState)=>({
                ...prevState,
                defenceForceType : defenceForceType,
                badgeType : ""
            }))
            setCurrentCategory(defenceForceType);
    }

    useEffect(() => {
        const defaultData = data?.filter(item => item?.fld_category === currentCategory)
        setFilteredData(defaultData);
    }, [data, currentCategory]);

      
    return (
        <>
            <section className="section-spacing pt-0 pb-4 category-filter">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="category-tab">
                                <p>
                                    Categories
                                </p>
                                <ul>
                                    <li className={currentCategory === "Indian Army" ? "defsec-cat Active": "defsec-cat"} onClick={() => getFilteredData('Indian Army')}>
                                        Indian Army
                                    </li>
                                    <li className={currentCategory === "Indian Navy" ? "defsec-cat Active": "defsec-cat"} onClick={() => getFilteredData('Indian Navy')}>
                                        Indian Navy
                                    </li>
                                    <li className={currentCategory === "Indian Air Force" ? "defsec-cat Active": "defsec-cat"} onClick={() => getFilteredData('Indian Air Force')}>Indian Air Force</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spacing indian-army-section pt-0 mb-5">
                <div className="container-fluid">
                    {
                        filteredData?.map((item,id)=>{
                            return( <div className="row" key={id}>
                        <div className="col-12">
                            <div className="main-heading text-center pb-4 pb-lg-5 pt-4 mb-2">
                                <h2>
                                    {item?.fld_category}
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 left-section">
                            <div className="image">
                                <img src={LeftBanner} className="img-fluid" alt={item?.fld_alt} />
                            </div>
                        </div>
                        <div className="col-lg-7 right-section">
                            <p dangerouslySetInnerHTML={{__html :item?.fld_long_desc }}/>
                        </div>
                    </div>)
                        })
                    }
                </div>
            </section>
        </>
    )
}