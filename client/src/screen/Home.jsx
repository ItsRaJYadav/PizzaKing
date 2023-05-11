import React from "react";
import Footer from '../components/Footer';
import Cat from "../components/Hero";
import Achievement from "./Achievement";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      <Cat />
      <Achievement />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
