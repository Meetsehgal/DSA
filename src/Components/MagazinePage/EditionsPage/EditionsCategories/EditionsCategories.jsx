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



    const handleAnnualEditionsYear=(event)=>{
         let AnnualEditionsYear=event.target.value;
         
         console.log("AnnualEditionsYear value "+AnnualEditionsYear)
         
    }
    const handleAnnualEditionsMonth=(event)=>{
        let AnnualEditionsMonth =event.target.value;
        console.log("AnnualEditionsMonth value "+ AnnualEditionsMonth)
    }
    const handleAnniversaryEditionsMonth=(event)=>{
        let AnniversaryEditionsMonth=event.target.value;
        console.log( "AnniversaryEditionsMonth"+AnniversaryEditionsMonth);

    }



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




                    <div className="container-fluid select-edition">

                           <form  className="AnnualEditionsYear">

                          <label>
                          <select onChange={handleAnnualEditionsYear}>
                              <option selected value="2024">2024</option>
                             <option value="2023">2023</option>
                              <option  value="2022">2022</option>
                             <option value="2021">2021</option>
                             <option value="2020">2020</option>
                             <option value="2019">2019</option>
                             <option value="2018">2018</option>
                             <option value="2017">2017</option>
                            </select>

                          
                           Year
                         </label>

                         <label className="mx-3">
                           
                         <select onChange={handleAnnualEditionsMonth}>
                              <option  value="Jan">Jan</option>
                              <option value="Feb">Feb</option>
                              <option  value="Mar">Mar</option>
                              <option  value="Apr">Apr</option>
                              <option  value="May">May</option>
                              <option  value="Jun">Jun</option>
                              <option  value="Jul">Jul</option>
                              <option  value="Aug">Aug</option>
                              <option  value="Sep">Sep</option>
                              <option  value="Oct">Oct</option>
                              <option  selected value="Nov">Nov</option>
                              <option  value="Dec">Dec</option>
                              
                              </select>
                              Month
                             
                         </label>


                         {/* <input type="submit" value="Submit" /> */}

                               </form>



                               <div className="AnniversaryEditionsMonth ">

                               <label>
                           
                                <select onChange={handleAnniversaryEditionsMonth}>
                                <option  selected value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option  value="Mar">Mar</option>
                                <option  value="Apr">Apr</option>
                                <option  value="May">May</option>
                                <option  value="Jun">Jun</option>
                                <option  value="Jul">Jul</option>
                                <option  value="Aug">Aug</option>
                                <option  value="Sep">Sep</option>
                                <option  value="Oct">Oct</option>
                                <option  value="Nov">Nov</option>
                                <option  value="Dec">Dec</option>
                                
                                </select>
                                Month
                               
                               </label>

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