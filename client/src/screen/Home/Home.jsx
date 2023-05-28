import React from "react";
import Footer from '../../components/Footer/Footer'
import Hero from "../Home/Hero";
import Achievement from "./Achievement";
import FAQ from "./FAQ";
import Playstore from "./Playstore";
import WelcomePopUp from './PopUp'
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import AdminHome from "./AdminHome";


const Home = () => {
  const { isAuthenticated } = useAuth0();

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
