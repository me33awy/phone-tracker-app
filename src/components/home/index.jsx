import React from "react";
import Header from "../header";
import Over from "../overlay";
import Main from "../main";
import About from "../about";
import Features from "../features";
const Home = () => {
  return (
    <>
      <div id="home">
        <Header />
        <Over />
        <Main />
        <About />
        <Features />
      </div>
    </>
  );
};

export default Home;
