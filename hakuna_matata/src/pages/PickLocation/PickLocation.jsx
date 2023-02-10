import React from "react";
import { Link } from "react-router-dom";

const PickLocation = ({ setGuestLogIn }) => {
  const toggleNav = () => {
    setGuestLogIn(true);
  };

  return (
    <div className="pickLocationPage">
      <h1 className="landingLogo">Eco-Pantry</h1>
      <form>
        <label>
          Where are you located?
          <input type="text" />
        </label>
        <label>
          What are your food preferences?
          <input type="text" />
        </label>
        <Link className="goButton" onClick={toggleNav} to={"/feed"}>
          GO
        </Link>
      </form>
    </div>
  );
};

export default PickLocation;
