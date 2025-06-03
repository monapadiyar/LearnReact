import { RES_CARD } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  
const RestaurantCard = (prop) => {
    const {resDataProp} = prop;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resDataProp?.info;
    return (
      <div className="res-card" style={styleCard}>
        <img
          src={RES_CARD + cloudinaryImageId}
          className="res-logo"
          alt="res-logo"
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
export default RestaurantCard;