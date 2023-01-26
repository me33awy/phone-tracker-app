import React, { useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import PhoneLogo from "../../logo";
import MobileMenu from "../../mobile";
import NavBar from "../../navbar";
import "./index.scss";
import { Nav } from "react-bootstrap";

function Header() {
  const navRef = useRef();
  const menuAnimate = useRef();
  const toggleMenu = () => {
    // console.log(menuAnimate);
    navRef.current.classList.toggle("responsive");
  };
  const animateMenu = () => {
    // console.log("hello");
    menuAnimate.current.classList.toggle("animate");
  };
  const func = () => {
    toggleMenu();
    animateMenu();
  };
  return (
    <>
      <header>
        <Navbar>
          <Container>
            <PhoneLogo />
            <button ref={menuAnimate} className="mobile-menu" onClick={func}>
              <div>
                <span></span>
              </div>
            </button>
            <Nav className="me-auto" ref={navRef}>
              <Nav.Link href="#home">About app</Nav.Link>
              <Nav.Link href="#link">Features</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Download the app</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
