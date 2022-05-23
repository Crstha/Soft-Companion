import React, { useContext } from "react";
import "./Toggle.css";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={sun} className="toggle_icon" />
      <img src={moon} className="toggle_icon" />
      <div
        className="toggle_Button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
