import "./App.scss";
import React, { useState } from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import Form from "./components/form";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
