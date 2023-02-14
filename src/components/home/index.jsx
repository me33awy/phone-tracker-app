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
const Home = () => {
  const loadingContext = useLoadingContext();
  const [state, setState] = useState();
  const loadData = async () => {
    //waiting one second
    await new Promise((r) => setTimeout(r, 1000));

    //return data
    const data = "this is loaded data";
    return data;
  };

  const loading = async () => {
    //loading some data
    const data = await loadData();
    setState(data);

    //call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => {
    loading();
  }, []);
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
};

export default Home;
