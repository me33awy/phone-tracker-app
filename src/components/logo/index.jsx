import React from "react";
import Logo from "../../assets/images/svg/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss"
function PhoneLogo() {
  return (
    <>
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="phone logo"
        />
      </Navbar.Brand>
    </>
  );
}

export default PhoneLogo;
