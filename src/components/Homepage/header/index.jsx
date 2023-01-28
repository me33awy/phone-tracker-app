import React, { useRef } from "react";
import { Container, Navbar, Overlay } from "react-bootstrap";
import PhoneLogo from "../../logo";
import MobileMenu from "../../mobile";
import NavBar from "../../navbar";
import "./index.scss";
import { Nav } from "react-bootstrap";

function Header() {
  const navRef = useRef();
  const menuAnimate = useRef();
  const overLayVar = useRef();
  const toggleMenu = () => {
    // console.log(menuAnimate);
    navRef.current.classList.toggle("responsive");
  };
  const animateMenu = () => {
    // console.log("hello");
    menuAnimate.current.classList.toggle("animate");
  };
  function over() {
    console.log(overLayVar);
    overLayVar.current.classList.toggle("over");
  }
  const func = () => {
    toggleMenu();
    animateMenu();
    over();
  };
  return (
    <>
      <header>
        <Navbar>
          <Container>
            <PhoneLogo />
            <button ref={menuAnimate} className="mobile-menu">
              <div onClick={func}>
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
      <div ref={overLayVar} onClick={func} className="overlay"></div>
    </>
  );
}

export default Header;
