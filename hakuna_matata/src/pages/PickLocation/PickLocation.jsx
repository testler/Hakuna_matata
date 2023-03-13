import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./pickLocation.css";

const PickLocation = () => {
  const viewPortWidth = window.innerWidth;
  var element = document.getElementById("html-element");
  var positionInfo = element.offsetWidth;
  console.log(positionInfo);
  const navMargin = 0;
  let pin = process.env.PUBLIC_URL + "/icon/pin2.svg";
  const toggleNav = () => {
    navMargin = viewPortWidth / 2 - 196;
    document.getElementById("navBox").style.display = "flex";
    document.getElementById("navBox").style.margin = `0 0 0 ${navMargin}`;
  };

  function hideIcon(self) {
    self.style.backgroundImage = "none";
  }

  useEffect(() => {
    document.getElementById("navBox").style.display = "none";
  }, []);

  return (
    <div className="pickLocationPage">
      <img
        className="landingLogo"
        alt="Eco-Pantry"
        src={process.env.PUBLIC_URL + "/images/eco-pantry-logo.png"}
      />
      <form className="inputForm">
        <div className="locateBox">
          <p className="locationQuestion">Where are you located?</p>
          <input
            id="search"
            name="search"
            className="locationInput"
            type="text"
            onChange="hideIcon(this);"
          />
        </div>

        <div className="options">
          <p>What are your food preferences?</p>
          <div className="checkBoxes">
            <div className="checkBox">
              <input type="checkbox" value="pescetarian" />
              <span> </span>pescetarian
              <img src={process.env.PUBLIC_URL + "/icon/pes.svg"} />
            </div>
            <div className="checkBox">
              <input type="checkbox" value="gluten-free" />
              <span> </span>gluten-free
              <img src={process.env.PUBLIC_URL + "/icon/gf.svg"} />
            </div>
            <div className="checkBox">
              <input type="checkbox" value="vegan" />
              <span> </span>vegan
              <img src={process.env.PUBLIC_URL + "/icon/vegan.svg"} />
            </div>
            <div className="checkBox">
              <input type="checkbox" value="kosher" />
              <span> </span>kosher
              <img src={process.env.PUBLIC_URL + "/icon/kosher.svg"} />
            </div>
            <div className="checkBox">
              <input type="checkbox" value="vegetarian" />
              <span> </span>vegetarian
              <img src={process.env.PUBLIC_URL + "/icon/veg.svg"} />
            </div>
            <div className="checkBox">
              <input type="checkbox" value="dairy-free" />
              <span> </span>dairy-free
              <img src={process.env.PUBLIC_URL + "/icon/df.svg"} />
            </div>
            <div className="checkBox">
              <input type="checkbox" value="halal" />
              <span> </span>halal
              <img src={process.env.PUBLIC_URL + "/icon/halal.svg"} />
            </div>
          </div>
        </div>
        <Link className="goButton" onClick={toggleNav} to={"/feed"}>
          See Offers Now
          <img src={process.env.PUBLIC_URL + "/icon/arrow-right.svg"} />
        </Link>
      </form>
    </div>
  );
};

export default PickLocation;
