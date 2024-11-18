import "./EditionsCategories.css";
import NoImg from "../../../../assets/img/no-image.jpg";

import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

export default function EditionsCategories({data}) {

    const [filteredData, setFilteredData] = useState(data || [])
   
    
   const getFilteredData = (type) => {
    if(type === ""){
        setFilteredData(data);
    }else{
        alert(type)
        const filteredItems = data?.filter(
            (item) => item?.fld_type === type && item?.fld_status === "Active"
        );
        setFilteredData(filteredItems);

    }
   }

   useEffect(() => {    
    setFilteredData(data || []); 
}, [data]);

    console.log(filteredData,"filter")

    return (
        <section className="section-spacing py-0  editions-category-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="category-tab">
                            <p>
                                Categories
                            </p>
                            <ul>
                                <li onClick={() => getFilteredData('annualedition')}>
                                    Annual Editions
                                </li>
                                <li onClick = {()=> getFilteredData('anivarsaryedition')}>
                                    Anniversary Editions
                                </li>
                                {/* <li onClick = {()=> getFilteredData('')}>
                                    All
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    {
                        filteredData?.map((item,id)=> {
                            return(<div className=" col-lg-3 edition-card" key={id}>
                                <Link to="/flip-book" className="box">
                                    <div className="date">
                                        <p>{item?.fld_month + " "}{item?.fld_year}</p>
                                        <p>{item?.fld_heading}</p>
                                    </div>
                                    <div className="image">
                                        <img src={item?.fld_image} className="img-fluid" alt={item?.fld_alt} />
                                    </div>
                                    {/* <h2>{item?.fld_long_desc}</h2> */}
                                    <p className="des">
                                    {item?.fld_short_desc}
                                    </p>
                                </Link>
                            </div>)
                        })
                    }
                </div>
            </div>
        </section>
    )
}