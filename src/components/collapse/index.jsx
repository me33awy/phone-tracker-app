import React, { useRef, useState } from "react";
import "./index.scss";
import Add from "../../assets/images/icons/plus.svg";
import Min from "../../assets/images/icons/min.svg";
const CustomCollapse = (props) => {
  const [display, isDisplay] = useState(false);
  const pDisplay = useRef();
  const text = useRef();
  function toggleCpllapse() {
    console.log("hui");
    isDisplay(!display);
    pDisplay.current.classList.toggle("pDisply");
    text.current.classList.toggle("op");
  }
  return (
    <div className="live__collapse">
      <div className="collapse__grid">
        <div className="plus" onClick={toggleCpllapse}>
          <img src={display ? Min : Add} alt="" />
        </div>
        <div className="text">
          <h5 ref={text}>{props.text}</h5>
        </div>
        <div className="pragraph__text" ref={pDisplay}>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
};
export default CustomCollapse;
