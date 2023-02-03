import React from "react";
import "./index.scss";
import { useRef } from "react";
const Over = () => {
  const overLay = 10;
  function over() {
    console.log(overLay);
    overLay.current.classList.toggle("over");
  }
  return;
};

export default Over;
