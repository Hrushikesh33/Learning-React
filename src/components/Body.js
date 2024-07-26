import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [restaurantsList, setRestaurantsList] = useState(resList)
  return (
    <div className="body">
          <div className="top-rated">
              <button onClick={() => {
                  restaurantsList = restaurantsList.filter((res) => res.info.avgRating >= 4);
                  restaurantsList.sort((a, b) => a.info.avgRating - b.info.avgRating);
                  setRestaurantsList(restaurantsList);
              }}>
                  Top rated
              </button>
          </div>
      <div className="restaurant-card-container">
        {restaurantsList.map((res) => (
          <RestaurantCard key={res.info.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;