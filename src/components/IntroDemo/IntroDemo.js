import React, { useState } from "react";
import "./IntroDemo.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "../../Data/DataSlider";

function IntroDemo() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slideactive-anim" : "slide"}
            key={obj.id}
          >
            <p className="text">{obj.title}</p>
            <img
              src={process.env.PUBLIC_URL + `/homeimages/img${index + 1}.jpg`}
            ></img>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default IntroDemo;
