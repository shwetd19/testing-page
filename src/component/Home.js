import React from "react";
import "./Home.css";
// import background from "./assets/Home-bg.png";

function App() {
  return (
    <div className="desktop-1">
      <img
        className="image-1-icon img-thumbnail"
        alt=""
        src="./assets/Home-bg.png"
      />
      <div className="company">
        <p className="company1">Meet Our Team</p>
      </div>
      {/* <div className="name">Team</div> */}
      <div className="desktop-1-child"></div>
      <div className="happy">Team</div>
      <div className="lawyers">Astra</div>
      {/* <div className="day">DAY</div> */}
      <div className="lorem-ipsum-dolor">
        Development of software for streamlining the listing of cases through
        Differentiated Case Flow Management
      </div>
      <div className="rectangle-parent">
        <div className="group-child"></div>
        <div className="read-more">Prototype</div>
        <button></button>
      </div>
    </div>
  );
}

export default App;
