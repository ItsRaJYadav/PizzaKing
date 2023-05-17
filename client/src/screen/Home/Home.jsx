import React from "react";
import Footer from '../../components/Footer/Footer'
import Hero from "../Home/Hero";
import Achievement from "./Achievement";
import FAQ from "./FAQ";
import Playstore from "./Playstore";
import WelcomePopUp from './PopUp'

const Home = () => {
  return (
    <>
      <WelcomePopUp/>
      <Hero />
      <Achievement />
      <Playstore/>
      <FAQ />
     
      <Footer/>
    </>
  );
};

export default Home;
