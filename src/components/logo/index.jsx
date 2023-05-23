import React from "react";
import Logo from "../../assets/images/svg/logo.svg";
import Logo__Alt from "../../assets/images/svg/logo-alt.svg";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
import { Link } from "react-router-dom";
function PhoneLogo(props) {
  return (
    <>
      <Link to="/">
        <Navbar.Brand className={props.className}>
          <img
            src='images/png/logo.png'
            className="d-inline-block align-top"
            alt="phone logo"
          />
        </Navbar.Brand>
      </Link>
    </>
  );
}

export default PhoneLogo;
