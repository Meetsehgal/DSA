import "./AboutPageHeader.css";
import GetApiCall from "../../../Helpers/Api/GetApi";
import { useEffect, useState } from "react";
export default function AboutPageHeader() {
  const [bannersData, setBannersData] = useState([]);
  useEffect(() => {
    getBanners();
  }, [])
  const getBanners = () => {
    GetApiCall.getRequest("GetBanners"
    ).then((results) => {
      results.json().then((obj) => {
        if (results.status === 200 || results.status === 201) {
          setBannersData(obj.data);
        } else {
        }
      });
    });
  }
  // const fliteredAboutUsBanners = bannersData?.filter((item)=> item?.fld_pagename === "AboutUs" && item?.fld_location === "Main")
  const fliteredAboutUsBanners = bannersData?.filter((item) => item?.fld_pagename === "AboutUs" && item?.fld_location === "MainCenter")

  return (
    <section className="about-page-header">
      <div className="content"> 
        {/* <h1>about</h1> */}
        <img src={fliteredAboutUsBanners[0]?.fld_desktop_image} className="img-fluid" alt="" />
      </div>
    </section>
  )
}