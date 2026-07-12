import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const NotFound = () => {
  return (
    <div className="Notfound">
     <Link to={"/"}> <img src={logo} alt="Compnay Logo" height={75}></img></Link>
      <h1 className="sorry">Sorry</h1>
      <h4>We could not found that page </h4>
      <p>
        Try searching or go to{" "}
        <Link to={"/"} className="link-color">
          Invisible Routes
        </Link>
      </p>
    </div>
  );
}

export default NotFound