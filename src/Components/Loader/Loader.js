import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="main">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-text">loading</div>
      </div>
      <a
        href="https://www.invisibleroutes.com"
        title="www.invisibleroutes.com"
        id="link"
      >
        www.invisibleroutes.com
      </a>
    </div>
  );
};

export default Loader;
