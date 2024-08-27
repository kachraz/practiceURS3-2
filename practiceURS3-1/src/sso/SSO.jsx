import React from "react";
import "./SSO.css"; // import the CSS file

const SolarSystem = () => {
  return (
    <div className="universe">
      <div className="orbit moon"></div>
      <div className="orbit mercury"></div>
      <div className="orbit venus"></div>
      <div className="orbit sun"></div>
      <div className="orbit mars"></div>
      <div className="orbit jupiter"></div>
      <div className="orbit saturn"></div>
      <div className="body earth"></div>
      <div className="body moon"></div>
      <div className="body mercury"></div>
      <div className="body venus"></div>
      <div className="body sun"></div>
      <div className="body mars"></div>
      <div className="body jupiter"></div>
      <div className="body-container saturn">
        <div className="ring-far a"></div>
        <div className="ring-far b"></div>
        <div className="shadow"></div>
        <div className="body-inner"></div>
      </div>
    </div>
  );
};

export default SolarSystem;
