import React from "react";
import { Container } from "react-bootstrap";
import PhoneLogo from "../logo";
import Logo__Alt from "../../assets/images/svg/logo-alt.svg";
import NavBar from "../navbar";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="flex d-flex justify-content-center">
          <PhoneLogo className="footer__logo" logo={Logo__Alt} />
          <NavBar className="footer__nav" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
