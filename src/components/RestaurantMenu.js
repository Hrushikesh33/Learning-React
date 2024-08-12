import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
 const [resMenu, setResMenu] = useState(null);


 useEffect( () =>{
    fetchMenu;
  
 },[])

 const fetchMenu = async () =>{
    const data = await fetch (
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=566342&catalog_qa=undefined&submitAction=ENTER"
    )
    const json = await data.json();
    setResMenu(json)
    console.log(json)
 }


if(resMenu === null) return <Shimmer />;



    return (
   <div className = "menu">
   <h1>Ni gudha</h1>

   </div>

    )
}

export default RestaurantMenu;