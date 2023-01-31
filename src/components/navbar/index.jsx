import React from "react";
import Nav from "react-bootstrap/Nav";
import Over from "../overlay";
import "./index.scss";
function NavBar() {
  return (
    <>
      <Nav className="me-auto">
        <Nav.Link href="/google.com">About app</Nav.Link>
        <Nav.Link href="#link">Features</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <Nav.Link href="#link">Download the app</Nav.Link>
      </Nav>
    </>
  );
}

export default NavBar;
