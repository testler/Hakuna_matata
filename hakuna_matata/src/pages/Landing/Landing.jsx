import {Link} from "react-router";

function Landing({guestLogIn}){
    

   
    return(
        <div className="landingPage">
            <img className="landingLogo">Eco-Pantry</img>
            <h1 className="">Welcome Friends!</h1>
            <p className="about">blah blah blah...click below to start shopping!</p>
            <Link className="startButton"  to={`/pickLocation`}>GET STARTED</Link>
        </div>

    )
}

export default Landing;