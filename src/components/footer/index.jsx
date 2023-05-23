import React from "react";
import { Container } from "react-bootstrap";
import PhoneLogo from "../logo";
import Logo__Alt from "../../assets/images/svg/logo-alt.svg";
import NavBar from "../navbar";
import "./index.scss";
import Form from "../form"
import "./index.scss";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = (props) => {

  return (
    <div className="footer" id={props.id}>
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
