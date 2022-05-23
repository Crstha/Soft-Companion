import React, { useState } from "react";
import img from "../../images/Digital.webp";
import "./Testimonials.css";
import BtnSlider from "./BtnSlider";
import testimononialsData from "../../core/data/testimonialsData";
import dataTestimonials from "../../core/data/testimonialsData";

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataTestimonials.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataTestimonials.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataTestimonials.length);
    }
  };

  return (
    <div className="container-slider">
      <div className="testimonials__Content">
        <h1 className="testimonials__Header">Our Testimonials</h1>
        {testimononialsData.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slideactive-anim center" : "slide"
              }
            >
              <img
                className="testimonials__imageProfile"
                src={process.env.PUBLIC_URL + `/homeimages/img${index + 1}.jpg`}
              ></img>
              <p>{obj.title}</p>
              <p>{obj.subTitle}</p>
            </div>
          );
        })}
      </div>

      <div className="container-image">
        {/* <img className="profile" src={img}></img> */}
      </div>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default Testimonials;
