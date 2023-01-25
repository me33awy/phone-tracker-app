import React from "react";
import { Container, Navbar } from "react-bootstrap";
import PhoneLogo from "../../logo";
import MobileMenu from "../../mobile";
import NavBar from "../../navbar";
import "./index.scss";

function Header() {
  return (
    <>
      <header>
        <Navbar>
          <Container>
            <PhoneLogo />
            <MobileMenu />
            <NavBar />
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
