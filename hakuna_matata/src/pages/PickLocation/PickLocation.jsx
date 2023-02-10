import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./pickLocation.css";
const PickLocation = () => {
  const toggleNav = () => {
    document.getElementById("navBox").style.display = "flex";
  };

  useEffect(() => {
    document.getElementById("navBox").style.display = "none";
  }, []);

  return (
    <div className="pickLocationPage">
      <h1 className="landingLogo">Eco-Pantry</h1>
      <form className="inputForm">
        <div className="locateBox">
          <p>Where are you located?</p>
          <input type="text" />
        </div>

        <div className="options">
          <p>What are your food preferences?</p>
          <div className="checkBoxes">
            <div className="checkBox">
              <input type="checkbox" value="pescetarian" />
              pescetarian
            </div>
            <div className="checkBox">
              <input type="checkbox" value="gluten-free" />
              gluten-free
            </div>
            <div className="checkBox">
              <input type="checkbox" value="vegan" />
              vegan
            </div>
            <div className="checkBox">
              <input type="checkbox" value="kosher" />
              kosher
            </div>
            <div className="checkBox">
              <input type="checkbox" value="vegetarian" />
              vegetarian
            </div>
            <div className="checkBox">
              <input type="checkbox" value="dairy-free" />
              dairy-free
            </div>
            <div className="checkBox">
              <input type="checkbox" value="halal" />
              halal
            </div>
          </div>
        </div>
        <Link className="goButton" onClick={toggleNav} to={"/feed"}>
          See Offer Now
        </Link>
      </form>
    </div>
  );
};

export default PickLocation;
