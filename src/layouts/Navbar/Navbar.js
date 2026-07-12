import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const menuRef = React.useRef(null);
  const [isSticky, setSticky] = React.useState(false);
  const [handleMenu, seHandleMenu] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(!isSticky) : setSticky(!isSticky);
    });
  }, [isSticky]);

  const handleToggle = () => {
    console.log("handleMenu: ", handleMenu);
    handleMenu ===false ? seHandleMenu(true) : seHandleMenu(true);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        console.log("false")
        seHandleMenu(false);
      }
      else{
        seHandleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // console.log("handleMenu: ", handleMenu);
  return (
    <nav className={`container ${isSticky ? "nav-fix" : ""}`}>
      <NavLink to="/">
        <img src={logo} alt="Compnay Logo" className="logo"></img>
      </NavLink>
      <ul className={handleMenu ? "" : "hide-moobile-menu"} ref={menuRef}>
        <li>
          <NavLink to="/" className={location.pathname === "/" ? "btn" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/internship"
            className={location.pathname === "/internship" ? "btn" : ""}
          >
            Intership
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testimonials"
            className={location.pathname === "/testimonials" ? "btn" : ""}
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={location.pathname === "/about-us" ? "btn" : ""}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={location.pathname === "/contact-us" ? "btn" : ""}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
      <img
        src={menu}
        alt="side bar icon"
        className="menu-icon"
        onClick={() => {
          handleToggle();
        }}
      ></img>
    </nav>
  );
}

export default Navbar;
