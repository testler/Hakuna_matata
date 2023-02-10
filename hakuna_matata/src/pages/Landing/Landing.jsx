import { Link } from "react-router-dom";

function Landing({ guestLogIn }) {
  return (
    <div className="landingPage">
      <h1 className="landingLogo">Eco-Pantry</h1>
      <h1 className="">Welcome Friends!</h1>
      <p className="about">blah blah blah...click below to start shopping!</p>
      <Link className="startButton" to={`/pickLocation`}>
        GET STARTED
      </Link>
    </div>
  );
}

export default Landing;
