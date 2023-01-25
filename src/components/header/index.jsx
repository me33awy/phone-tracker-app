import React from "react";
import "./index.scss";
import Logo from "../../assets/images/svg/logo.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function Header() {
  return (
    <header>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="phone logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
