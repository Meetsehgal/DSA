import { useContext, useEffect, useState } from "react";
import NavigationSection from "../NavigationSection/NavigationSection";
import CategoryFilter from "../PodcastEventsPage/CategoryFilter/CategoryFilter";
import AwardsCategoryPage from "./AwardsCategoryFilter/AwardsCategoryPage";
import BadgesSection from "./BadgesSection/BadgesSection";
import CareersPage from "./CareersPage/CareersPage";
import IndianArmySection from "./IndianArmySection/IndianArmySection";
import TopSection from "./TopSection/TopSection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import PostApiCall from "../../../Helpers/Api/PostApi";
import { store } from "../../../Helpers/Store/Store";

export default function DefSecEduPage() {
    const {defSecEduData,defSecEduType, setDefSecEduData,defSecEduFilteredData} = useContext(store);
    

    const getDefSecEduData = () => {
        PostApiCall.postRequest(
            {
                whereClause:""
            },
            "GetDefSecEdu"
        ).then((results)=> {
          results.json().then((obj) => {
            if (results.status === 200 || results.status === 201) {
                setDefSecEduData(obj.data); 
          }else {
            // notification.error({
            //   message: `Notification error`,
            //   description: obj.data,
            // });
            }
          })
        })
      }

      useEffect(()=>{
        getDefSecEduData();
      },[])

      
console.log(defSecEduFilteredData,"hibkcbdijbcdb")
    
    return (
        <>
            <NavigationSection />
            <TopSection />
            <WelcomeSection />
            {/* <CategoryFilter /> */}
            {/* Insignia page */}
            {defSecEduType === "Insignia" &&
            <>
            <IndianArmySection />
            <BadgesSection />
            </>
            }
            {/* Awards Page */}
            {defSecEduType === "Awards" &&
            <AwardsCategoryPage />
            }
            {/* Careers Page */}
            {defSecEduType === "Careers" &&
            <CareersPage />
            }
        </>
    )
}