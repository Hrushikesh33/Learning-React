import React from "react";
import ReactDOM from "react-dom/client";

const Inside = () => {
  return (<h2>
      I am soul
  </h2>)
}


const Header = () => {
  return (
    <div>
      <h1>I am Hrushikesh</h1>
      <Inside />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
