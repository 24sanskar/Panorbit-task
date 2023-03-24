import React from "react";
import ProfileDetails from "../profileDetails/ProfileDetails";

import "./home.css";

const Home = () => {
  return (
    <div
      class="parent"
      style={{
        backgroundImage: `url("./images/homeBack.png")`,
      }}
    >
      <div class="child">
        <h2 className="homeheading" style={{ backgroundColor: `#F6F6F6` }}>
          Select an account
        </h2>
        <ProfileDetails />
      </div>
    </div>
  );
};

export default Home;
