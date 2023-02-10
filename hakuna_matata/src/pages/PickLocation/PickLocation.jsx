import React from 'react'
import {Link} from 'react-router-dom'

const PickLocation = () => {

    const toggleNav = () => {
        // guestLogIn = true;
     }


  return (
    <div className='pickLocationPage'>
        <img className="landingLogo">Eco-Pantry</img>
        <form>
      <label>Where are you located?
        <input type="text" />
      </label>
      <label>What are your food preferences?
        <input type="text" />
      </label>
      <Link className="goButton" onClick={toggleNav} to={"/feed"}>GO</Link>
        </form>
    </div>
  )
}

export default PickLocation