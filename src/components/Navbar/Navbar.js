import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo_.png";
import "./Navbar.css";
import { ThemeContext } from "../../context";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      {/* <div className="container-fluid"> */}
      <nav
        style={{ backgroundColor: darkMode && "#333" }}
        className="navbar navbar-expand-lg navbar-light "
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Soft Companion
            {/* <img className="navbar__Logo" src={logo} alt=""></img> */}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/expertise">
                  Our Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Technologies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/work">
                  Our Works
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  Our Teams
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  Let's Talk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" to="/career">
                  Carrers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
