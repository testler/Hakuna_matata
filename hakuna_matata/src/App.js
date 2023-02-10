import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Nav from "./components/Nav/Nav";
import Feed from "./pages/Feed/Feed";
import Favorites from "./pages/Favorites/Favorites";
import Map from "./pages/Map/Map";
import Profile from "./pages/Profile/Profile";
import PickLocation from "./pages/PickLocation/PickLocation.jsx";
function App() {
  let [guestLogIn, setGuestLogIn] = false;
  console.log(guestLogIn);

  //Empty array to add favorites to
  let favArr = [];

  if (guestLogIn) {
    document.getElementById("footer").style.display = "block";
  }

  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route index element={<Landing />} />
          <Route
            path="/pickLocation"
            element={<PickLocation setGuestLogIn={setGuestLogIn} />}
          />
          <Route path="/feed" element={<Feed favArr={favArr} />} />
          <Route path="/map" element={<Map />} />
          <Route path="/favorites" element={<Favorites favArr={favArr} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className="navBox">
        <Nav id="footer" />
      </div>
    </div>
  );
}

export default App;
