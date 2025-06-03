import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable
  const[resDataList, setResDataList] = useState(resData);

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
             console.log(resDataList[0].info + "j")
             setResDataList(resDataList.filter(x=>x.info.avgRating > 4.3));
            console.log(resDataList + "j")
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
         {
          resDataList.map(x=>
            <RestaurantCard key={x.info.id} resDataProp={x}></RestaurantCard>
          )
         }
        </div>
      </div>
    );
  };
export default Body;