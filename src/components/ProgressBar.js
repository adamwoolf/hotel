import React from "react";
import progress from "../assets/los-cocos-1.png";

const ProgressBar = () => {
  return (
    <div className="progress-header">
      <h4>Rooms & Rates</h4>
      <img src={progress} style={{ width: 400 }} />
    </div>
  );
};

export default ProgressBar;
