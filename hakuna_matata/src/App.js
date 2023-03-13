import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Nav from "./components/Nav/Nav";
import Feed from "./pages/Feed/Feed";
import Favorites from "./pages/Favorites/Favorites";
import Map from "./pages/Map/Map";
import Profile from "./pages/Profile/Profile";
import PickLocation from "./pages/PickLocation/PickLocation.jsx";
function App() {
  //Empty array to add favorites to
  let favArr = [];

  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/pickLocation" element={<PickLocation />} />
          <Route path="/feed" element={<Feed favArr={favArr} />} />
          <Route path="/map" element={<Map />} />
          <Route path="/favorites" element={<Favorites favArr={favArr} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      {/* <div>  */}
      <div id="navBox">
        <Nav />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
