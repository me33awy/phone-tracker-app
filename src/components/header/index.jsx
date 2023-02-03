import React, { useRef } from "react";
import { Container, Navbar, Overlay } from "react-bootstrap";
import PhoneLogo from "../logo";
import MobileMenu from "../mobile";
import NavBar from "../navbar";
import "./index.scss";
import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
function Header() {
  const navRef = useRef();
  const menuAnimate = useRef();
  const overLayVar = useRef();
  const headerBackground = useRef();
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
  const toggleScroll = () => {
    console.log("hi Scroll");
    isScroll(!scroll);
  };
  function headerBackgroudAppear() {
    setBackground(!background);
  }
  const func = () => {
    toggleMenu();
    animateMenu();
    over();
    toggleScroll();
  };
  const [scroll, isScroll] = useState(false);
  scroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const [background, setBackground] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      headerBackground.current.style.backgroundColor = "rgb(29, 155, 240)";
      setBackground(true);
    } else {
      headerBackground.current.style.backgroundColor = "transparent";
      setBackground(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  let link = "#page";
  let google = "https://www.google.com/";
  return (
    <>
      <header ref={headerBackground}>
        <Navbar>
          <Container className="headerContainer">
            <PhoneLogo />
            <button ref={menuAnimate} className="mobile-menu">
              <div onClick={func}>
                <span></span>
              </div>
            </button>
            <Nav className="me-auto" ref={navRef}>
              <Nav.Link href={link}>About app</Nav.Link>
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