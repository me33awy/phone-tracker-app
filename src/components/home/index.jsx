import React from "react";
import Header from "../header";
import Over from "../overlay";
import Main from "../main";
import About from "../about";
import Features from "../features";
import Problems from "../problems";
import Download from "../download";
import Footer from "../footer";
import Contact from "../contact";
import Logo from "../../assets/images/svg/logo.svg";
import { useLoadingContext } from "react-router-loading";
import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(loading);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading(!loading);
    };
    console.log(loading);

    loadData();
  }, []);

  if (loading) {
    return (
      <>
        <div id="home">
          <Header logo={Logo} name="overlay" />
          <Over />
          <Main />
          <About />
          <Features />
          <Problems />
          <Download />
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <div className="loading d-flex align-items-center justify-content-center vh-100">
        <InfinitySpin width="200" color="rgb(29, 155, 240)" />
      </div>
    );
  }
};

export default Home;
