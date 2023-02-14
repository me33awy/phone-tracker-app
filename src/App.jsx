import "./App.scss";
import React, { useState } from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import { useEffect } from "react";
import { Route, Routes } from "react-router-loading";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} loading />
          <Route path="/contact" element={<Contact />} loading />
        </Routes>
      </div>
    </>
  );
}

export default App;
