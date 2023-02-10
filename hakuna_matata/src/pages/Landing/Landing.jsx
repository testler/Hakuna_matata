import { Link } from "react-router-dom";
import "./Landing.css";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    document.getElementById("navBox").style.display = "none";
  }, []);
  return (
    <div className="landingPage">
      {/* <h1 className="landingLogo">Eco-Pantry</h1> */}
      <img
        className="landingLogo"
        alt="Eco-Pantry"
        src={process.env.PUBLIC_URL + "/images/eco-pantry-logo.png"}
      />
      <h1 className="welcome">Welcome Friends!</h1>
      <p className="about">
        Eco-Pantry is your friendly community food service! We alert you with
        the best deals and offers for local grocery stores and restaurants. Our
        goal is to limit food waste and save you some money at the same time.
      </p>
      <div className="wasteExamples">
        <div className="exampleBox">
          <p className="exampleTitle">Food Wasted in the U.S. last year</p>
          <div className="example" id="example1">
            <h2 className="exampleCount">130</h2>
            <p className="exampleDesc">Billion Meals</p>
          </div>
        </div>
        <div className="exampleBox">
          <p className="exampleTitle2">Food Provided by Eco-Pantry last year</p>
          <div className="example" id="example2">
            <h2 className="exampleCount">200,000</h2>
            <p className="exampleDesc">Meals Sold</p>
          </div>
        </div>
      </div>
      <Link className="startButton" to={`/pickLocation`}>
        Get Started
        <img src={process.env.PUBLIC_URL + "/icon/arrow-right.svg"} />
      </Link>
    </div>
  );
}

export default Landing;
