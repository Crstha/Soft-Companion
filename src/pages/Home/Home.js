import React from "react";
import About from "../../components/About/About";
import Intro from "../../components/Intro/Intro";
import IntroDemo from "../../components/IntroDemo/IntroDemo";
// import Navbar from "../../components/Navbar/Navbar";
import Expertise from "../../components/Our Expertise/Expertise";
import ProductList from "../../components/Product List/ProductList";
import Services from "../../components/Services/Services";
import TestimonialTest from "../../components/Testimonials/TestimonialTest";
// import Test from "../../components/TestComponent/Test";

const Home = () => {
  return (
    <div className="home">
      {/* <Intro /> */}
      <IntroDemo />
      <About />
      <Services />
      <Expertise />
      <ProductList />
      <TestimonialTest />

      {/* <Test /> */}
    </div>
  );
};

export default Home;
