import React from "react";
import "./Intro.css";
import Me from "../../images/me2.png";

const Intro = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="intro__leftWrapper col-md-6 col-sm-12">
          <h2 className="intro__title col-md-12 col-sm-6">
            Hello, Here is Your
          </h2>
          <h1 className="intro__titleName col-md-12 col-sm-6">
            Soft Companion
          </h1>
          <div className="intro__itemsWrapper col-md-12 col-sm-6">
            <div className="intro__items col-md-12 col-sm-6">
              <div className="intro__item">Web Developemnt</div>
              <div className="intro__item">UI/UX Designing</div>
              <div className="intro__item">Web Hosting</div>
              <div className="intro__item">Mobile App Development</div>
              <div className="intro__item">API Development</div>
            </div>
          </div>
          <p className="intro__description">
            We design and develop services for all sizes, specializing in
            creating stylish, modern websites, web services, mobile application,
            api hostinh and etc.
          </p>
        </div>
        <div className="intro__rightWrapper col-md-6 col-sm-12">
          <div className="bg"></div>
          <img src={Me} alt="" className="intro__image"></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
