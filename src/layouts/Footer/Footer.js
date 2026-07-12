import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item container">
        <ul>
          <li>
            <NavLink to={"/term-and-condition"}>Term and Conditions</NavLink>
          </li>
          <li>
            <NavLink to={"/privacy-and-policy"}>Privacy and Policy</NavLink>
          </li>
          <li>
            <NavLink to={"/faqs"}>FAQ's</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="rights">
        <p>
          © 2024 <NavLink to={"/"}>Invisible Routes</NavLink>. All rights
          reserved.
        </p>
        <p>
          <a href="mailto:invisibleroutes@gamil.com">
            invisibleroutes@gamil.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
