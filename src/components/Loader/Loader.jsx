import React from "react";
import "./index.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="text">Saving counter value</p>
    </div>
  );
};

export default Loader;
