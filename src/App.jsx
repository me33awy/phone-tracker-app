import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Homepage/header";
import Over from "./components/overlay";
import Main from "./components/Homepage/main";
import { useRef } from "react";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Over />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
      </div>
    </>
  );
}

export default App;
