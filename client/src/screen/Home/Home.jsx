import React from "react";
import Footer from '../../components/Footer/Footer'
import Hero from "../../components/Hero/Hero";
import Achievement from "./Achievement";
import FAQ from "./FAQ";
import Playstore from "./Playstore";

const Home = () => {
  return (
    <>
      <Hero />
      <Achievement />
      <Playstore/>
      <FAQ />
      
      <Footer/>
    </>
  );
};

export default Home;
