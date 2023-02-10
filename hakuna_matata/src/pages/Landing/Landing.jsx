import { Link } from "react-router-dom";
import "./Landing.css";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    document.getElementById("navBox").style.display = "none";
  }, []);
  return (
    <div className="landingPage">
      <h1 className="landingLogo">Eco-Pantry</h1>
      <h1 className="welcome">Welcome Friends!</h1>
      <p className="about">
        Eco-Pantry is your friendly community food service! We alert you with
        the best deals and offers for local grocery stores and restaurants. Our
        goal is to limit food waste and save you some money at the same time.
      </p>
      <div className="wasteExamples">
        <div className="exampleBox">
          <p className="exampleTitle">Food Wasted in the U.S.</p>
          <div className="example">
            <h2 className="exampleCount">130</h2>
            <p className="exampleDesc">Billion Meals</p>
          </div>
        </div>
        <div className="exampleBox">
          <p className="exampleTitle">Meals Provided by Eco-Pantry</p>
          <div className="example">
            <h2 className="exampleCount">200,000</h2>
            <p className="exampleDesc">Meals Sold</p>
          </div>
        </div>
      </div>

      {/* <button className="startButton"> */}
      <Link className="startButton" to={`/pickLocation`}>
        Get Started
      </Link>
      {/* </button> */}
    </div>
  );
}

export default Landing;
