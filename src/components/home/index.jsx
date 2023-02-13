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
const Home = () => {
  return (
    <>
      <div id="home">
        <Header />
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
