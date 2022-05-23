import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Services.css";
import mobile from "../../images/mobilelogo.png";
import web from "../../images/webapp.webp";
import desktop from "../../images/Desktop.webp";
import wordpress from "../../images/WordPress.webp";
import SEO from "../../images/social-media-optimization.webp";
import graphics from "../../images/circle.webp";
import digital from "../../images/Digital-Marketing.webp";
import hosting from "../../images/hosting.webp";
import { ThemeContext } from "../../context";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      <div className="services__texts">
        <h1 className="services__title">Services</h1>
        <p className="services__desc">
          Tailored services for any development incentive. Of any scope. At any
          time. Accelerate creativity and growth with technology to power 360°
          value at larger scale
        </p>
      </div>
      <div className="services__list">
        <div className="card service__Card">
          <div className="card-body">
            <img className="logo" src={mobile} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              Mobile Application <span>Development</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
        <div className="card service__Card">
          <div className="card-body">
            <img className="logoweb" src={web} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              Web Application Design and <span>Development</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
        <div className="card service__Card">
          <div className="card-body">
            <img className="logoweb" src={desktop} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              Desktop Application <span>Development</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
        <div className="card service__Card">
          <div className="card-body">
            <img className="logo" src={SEO} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              Search Engine<span>Optimization</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
        <div className="card service__Card">
          <div className="card-body">
            <img className="logoweb" src={wordpress} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              Wordpress <span>Development</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
        <div className="card service__Card">
          <div className="card-body">
            <img className="logoweb" src={graphics} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              Graphics <span>Design</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
        <div className="card service__Card">
          <div className="card-body">
            <img className="logo" src={digital} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              Digital <span>Marketing</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
        <div className="card service__Card">
          <div className="card-body">
            <img className="logoweb" src={hosting} alt=""></img>
            <h2
              style={{ color: darkMode && "#333" }}
              className="services__cardTitle"
            >
              All Sorts of <span>Hosting</span>
            </h2>
            <p
              style={{ color: darkMode && "#333" }}
              className="services__subtitle"
            >
              Get end-to-end mobile app development from business analysis to
              deployment.
            </p>
            <NavLink to="/" className={"btn btn-tertiary button"}>
              See More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
