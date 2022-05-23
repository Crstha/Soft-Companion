import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialTest.css";
import { Avatar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const TestimonialTest = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card
            img="https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/278803931_3294826844082441_4763219639998028435_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WVBbCCCNLUoAX-NNLk8&_nc_ht=scontent.fktm9-2.fna&oh=00_AT8Q2y-dcLaG01Cl4W9N-XMIJFDezUoFsCYEtOmH2hP-mA&oe=628F91E7"
            name="Subarna Shrestha"
            desc="Steve & Kate’s camp runs summer camps for children across the U.S. The
            unique thing about Steve & Kate’s camp is that their entire website is
            essentially a series of customer testimonials."
            position="Front-End Developer"
          />
          <Card
            img="https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/276141205_1683377855394659_616846088070448932_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g9Dtk7JZt-8AX_sb65U&_nc_ht=scontent.fktm9-2.fna&oh=00_AT-CvOW9y0ddlbwtcx31DD_rGeFhh58F01ALMDzQmiPnZg&oe=628F56B0"
            name="Dinesh Timalsina"
            desc="Steve & Kate’s camp runs summer camps for children across the U.S. The
            unique thing about Steve & Kate’s camp is that their entire website is
            essentially a series of customer testimonials."
            position="Front-End Developer"
          />
          <Card
            img="https://scontent.fktm9-2.fna.fbcdn.net/v/t1.6435-9/58444870_1152879118215071_8129771572568260608_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=ZUP7i2QFUuoAX9sPt2I&_nc_ht=scontent.fktm9-2.fna&oh=00_AT-EFX1u9ZeRRy8iyIHL1plZR7FMIxys-V8_SnyCXWrpSw&oe=62AFEE23"
            name="Ram Ghimire"
            desc="Steve & Kate’s camp runs summer camps for children across the U.S. The
            unique thing about Steve & Kate’s camp is that their entire website is
            essentially a series of customer testimonials."
            position="Back-End Developer"
          />
          <Card
            img="https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/278842979_1244221445981686_3547897116257803250_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cGlMF_RGbG0AX_jNxkg&_nc_ht=scontent.fktm9-2.fna&oh=00_AT_KQMSVVY3x1xVFDJuhPLVohyjMXsWAhNQllDD6ofPFmg&oe=628FCC0E"
            name="Bikash Karki"
            desc="Steve & Kate’s camp runs summer camps for children across the U.S. The
            unique thing about Steve & Kate’s camp is that their entire website is
            essentially a series of customer testimonials."
            position="Back-End Developer"
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, desc, name, position }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        className="profile__Avatar"
        imgProps={{ style: { borderRadius: "50%" } }}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
        src={img}
      />
      <p>{desc}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span>,{" "}
        {position}
      </p>
    </div>
  );
};

export default TestimonialTest;
