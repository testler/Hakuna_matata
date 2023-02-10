import { Link } from "react-router";
import { useEffect } from "react";

function Favorites({ favArr }) {
  useEffect(() => {
    document.getElementById("navBox").style.display = "flex";
  }, []);
  return (
    <div class="favorites">
      <h1>Favorites Page</h1>
    </div>
  );
}

export default Favorites;
