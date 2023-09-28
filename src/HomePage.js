import React from "react";
import Process from "./component/Slider";

function HomePage({ history }) {
  const navigateToSecondPage = () => {
    history.push(Process);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToSecondPage}>Go to Second Page</button>
    </div>
  );
}

export default HomePage;
