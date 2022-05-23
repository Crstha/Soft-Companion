import React from "react";
import "./IntroDemo.css";
import leftArrow from "../../images/icons/left-arrow.svg";
import rightArrow from "../../images/icons/right-arrow.svg";

function BtnSlider({ direction, moveSlide }) {
  //   console.log(direction, moveSlide);
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      <img src={direction === "next" ? rightArrow : leftArrow}></img>
    </button>
  );
}

export default BtnSlider;
