import React from "react";
import Nav from "react-bootstrap/Nav";
import Over from "../overlay";
import "./index.scss";
function NavBar() {
  return (
    <>
      <div className="nav__bar">
        <Nav className="me-auto">
          <Nav.Link href="#About">About app</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#download">Download the app</Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default NavBar;
