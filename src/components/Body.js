import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  let [restaurantsList, setRestaurantsList] = useState([]);
  let [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const[inputData, setInputData] = useState("");
  

  useEffect(() => {
    fetchData();
    
  }, [])
  const fetchData = async () => {
    const response = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const data = await response.json();
    setfilteredRestaurants(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setRestaurantsList(data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return restaurantsList.length === 0?(<Shimmer />):(
    <div className="body">
      <div className="functionality">
        <div className="search">
          <input className="input-box" value={inputData} onChange={(e) => {
            setInputData(e.target.value);
          }}/>
          <button className="search-button" onClick={() => {
            searchedRestaurants = restaurantsList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(inputData.toLowerCase()));
            setfilteredRestaurants(searchedRestaurants);

          }}>Search</button>
        </div>
        <div className="top-rated">
              <button onClick={() => {
                  filteredRestaurants = filteredRestaurants.filter((res) => res.info.avgRating >= 4);
                  filteredRestaurants.sort((a, b) => b.info.avgRating - a.info.avgRating);
                  setfilteredRestaurants(filteredRestaurants);
              }}>
                  Top rated
          </button>
          </div>
      </div>
      <div className="restaurant-card-container">
        { filteredRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;