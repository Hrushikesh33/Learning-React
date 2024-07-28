import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, avgRating, costForTwo, cloudinaryImageId, areaName } =
    restaurant?.info;

  return (
    <div className="restaurant-card">
      <img
        src= {CDN_URL+ cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;