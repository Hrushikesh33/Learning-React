import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  let [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, [])
  
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const data = await response.json();

    setRestaurantsList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  if (restaurantsList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
          <div className="top-rated">
              <button onClick={() => {
                  restaurantsList = restaurantsList.filter((res) => res.info.avgRating >= 4);
                  restaurantsList.sort((a, b) => b.info.avgRating - a.info.avgRating);
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