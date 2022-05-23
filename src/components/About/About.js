import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <div className="about__card bg"></div>
        <div className="about__card">
          <img
            src="https://www.allbusiness.com/asset/2016/07/business-meeting.jpg"
            alt=""
            className="about__img"
          ></img>
        </div>
      </div>
      <div className="about__right">
        <h1 className="about__title">About Us</h1>
        <p className="about__subTitle">
          Soft Companion is changing the way the world works by providing an
          on-demand, digital workforce for scaling critical business processes
          in the cloud. We’re also on a mission to create meaningful work for as
          many people as possible.
        </p>
        <p className="about__desc">
          Building a website is an exercise of willpower. The bells and whistles
          of the design process are tempting to focus on, but compelling content
          is what makes a website work for your business. There are few pieces
          of content on your website that are more compelling than your mission,
          vision, values, and team. And all of these elements are typically
          found on the About page of your website.
        </p>
        <div className="about__award">
          <img
            className="about__award__img"
            src="https://www.sterlingcheck.com/wp-content/uploads/2018/09/1207-ST-US-BLOG-HRD-Congress-Awards-small-trophy-sunlight-V2-595x525.jpg"
            alt=""
          ></img>
          <div className="about__award__contents">
            <h4 className="about__award__title">
              International Best Company Award
            </h4>
            <p className="about__award__desc">
              Best award goes to Soft Companion,Best award goes to Soft
              Companion,Best award goes to Soft Companion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
