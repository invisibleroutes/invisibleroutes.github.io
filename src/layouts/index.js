import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "./HomeLayouts.css"
const HomeLayouts = ({ children }) => {
  return (
      <div className="layout">
          <Navbar />
          <div className="children">{children}</div>
          <Footer />
      </div>
  );
};

export default HomeLayouts;
