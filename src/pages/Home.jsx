import React from "react";
import Header from "../component/header";
import Hero from "../component/Hero";
import About from "../component/About";
import Services from "../component/Services";
import Footer from "../component/Footer";

function home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default home;
