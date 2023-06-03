import React from "react";
import Footer from '../../components/Footer/Footer'
import Hero from "../Home/Hero";
import Achievement from "./Achievement";
import FAQ from "./FAQ";
import Playstore from "./Playstore";
import WelcomePopUp from './PopUp'
import { useSelector } from "react-redux";
import AdminHome from "./AdminHome";


const Home = () => {
  

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      {
        currentUser && currentUser.isAdmin ?
        <>
        <AdminHome/>
        </> 
        : (
          <>
            <WelcomePopUp />
            <Hero />
            <Achievement />
            <Playstore />
            <FAQ />

            <Footer />
          </>
        )
      }

    </>
  );
};

export default Home;
