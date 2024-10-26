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

    const {defSecEduData, defSecEduType, setDefSecEduData, defSecEduFilteredData} = useContext(store);
    const [defenceForceType, setDefenceForceType] = useState('')

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

      const insignia = defSecEduData?.filter((item)=> item?.fld_type === "Insignia")
      const awards = defSecEduData?.filter((item)=> item?.fld_type === "Awards")
      const careers = defSecEduData?.filter((item)=> item?.fld_type === "Careers")

      useEffect(()=>{
        getDefSecEduData();
      },[])

          
    return (
        <>
            <NavigationSection />
            <TopSection />
            <WelcomeSection />
            {/* <CategoryFilter /> */}
            {/* Insignia page */}
            {defSecEduType === "Insignia" &&
            <>
            <IndianArmySection data={insignia} setDefenceForceType = {setDefenceForceType} />
            <BadgesSection data = {insignia} defenceForceType = {defenceForceType}/>
            </>
            }
            {/* Awards Page */}
            {defSecEduType === "Awards" &&
            <AwardsCategoryPage data={awards} />
            }
            {/* Careers Page */}
            {defSecEduType === "Careers" &&
            <CareersPage data={careers} />
            }
        </>
    )
}