import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://cdn-icons-png.freepik.com/256/16286/16286697.png?ga=GA1.1.1730889374.1721809829&semt=ais_hybrid"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2274f59cb8efcfab1f446b195bcbda3b" alt="img" />
      <h4>Shree Naivedyam</h4>
      <h4>4.5</h4>
      <h4>55-60 mins</h4>
      <h4>North Indian, Chinese </h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        Search Bar
      </div>
      <div className="restaurant-card-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      

      </div>
      
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />) 
