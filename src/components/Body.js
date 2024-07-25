import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search Bar</div>
      <div className="restaurant-card-container">
        {restaurantsList.map((res) => (
          <RestaurantCard key={res.info.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;