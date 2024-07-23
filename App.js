import React from "react";
import ReactDOM from "react-dom/client";

const endo = <h3>I am soul's soul</h3> // JSX => babel =>transpiles to => React Element =>returns =>object

const Inside = () => {
  return (
    <div>
    <h2 id="heading">I am soul</h2>
    { endo }
    </div>
  )
}

//Functional component is just a function that returns JSX
const Header = () => {
  return (
    <div>
      <h1>I am Hrushikesh</h1>
      <Inside />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Header()) 
