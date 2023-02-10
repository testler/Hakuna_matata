import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Nav from './components/Nav';
import Feed from './pages/Feed/Feed';
import Favorites from './pages/Favorites/Favorites';
import Map from './pages/Map/Map';
import Profile from './pages/Profile/Profile';
function App() {

  let guestLogIn = false;

  //Empty array to add favorites to
  let favArr = [];


  if(guestLogIn){
    document.getElementById("footer").style.display = "flex";
  }


  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route index element={<Landing/>} />
          <Route path="/pickLocation" element={<PickLocation guestLogIn={guestLogIn}/>} />
          <Route path="/feed" element={<Feed favArr={favArr}/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="/favorites" element={<Favorites favArr={favArr}/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
      <Nav id="footer"/>
    </div>
  );
}

export default App;
