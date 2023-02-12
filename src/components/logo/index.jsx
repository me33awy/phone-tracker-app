import React from "react";
import Logo from "../../assets/images/svg/logo.svg";
import Logo__Alt from "../../assets/images/svg/logo-alt.svg";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
function PhoneLogo(props) {
  return (
    <>
      <Navbar.Brand href="#home" className={props.className}>
        <img
          src={props.logo}
          className="d-inline-block align-top"
          alt="phone logo"
        />
      </Navbar.Brand>
    </>
  );
}

export default PhoneLogo;
