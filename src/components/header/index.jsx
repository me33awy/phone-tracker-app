import React, { useRef } from "react";
import { Container, Navbar, Overlay } from "react-bootstrap";
import PhoneLogo from "../logo";
import MobileMenu from "../mobile";
import NavBar from "../navbar";
import "./index.scss";
import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import Contact from "../contact";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../home";
import { HashLink } from "react-router-hash-link";

function Header(props) {
  const navRef = useRef();
  const menuAnimate = useRef();
  const overLayVar = useRef();
  const headerBackground = useRef();
  const clickLink = useRef();
  const toggleMenu = () => {
    // console.log(menuAnimate);
    navRef.current.classList.toggle("responsive");
  };
  const animateMenu = () => {
    // console.log("hello");
    menuAnimate.current.classList.toggle("animate");
  };
  function over() {
    // console.log(overLayVar);
    overLayVar.current.classList.toggle("over");
  }

  function headerBackgroudAppear() {
    setBackground(!background);
  }

  let [scroll, isScroll] = useState(false);
  scroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const toggleScroll = () => {
    // console.log("hi Scroll");
    isScroll(!scroll);
  };
  const [background, setBackground] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 44) {
      if (headerBackground.current.classList.contains("header__alt")) {
        headerBackground.current.style.backgroundColor = "rgb(246, 246, 246)";
      } else {
        headerBackground.current.style.backgroundColor = "rgb(29, 155, 240)";
      }
      setBackground(true);
    } else {
      headerBackground.current.style.backgroundColor = "transparent";
      setBackground(false);
    }
  };
  useEffect(() => {
    // changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  function clickOver() {
    console.log("Hi clickOver Function Here");
    overLayVar.current.classList.remove("over");
    navRef.current.classList.remove("responsive");
    menuAnimate.current.classList.remove("animate");
    if (window.innerWidth <= 768) {
      isScroll(!scroll);
    }
  }
  const func = () => {
    toggleMenu();
    animateMenu();
    over();
    toggleScroll();
  };
  return (
    <>
      <header className={props.className} ref={headerBackground}>
        <Navbar>
          <Container className="headerContainer">
            <PhoneLogo logo={props.logo} />
            <button id={props.mobile} ref={menuAnimate} className="mobile-menu">
              <div onClick={func}>
                <span></span>
              </div>
            </button>
            <Nav className="me-auto" ref={navRef}>
              <Nav.Link onClick={clickOver} ref={clickLink}>
                <HashLink smooth to="/#about">
                  {" "}
                  About app{" "}
                </HashLink>
              </Nav.Link>
              <Nav.Link onClick={clickOver} ref={clickLink}>
                <HashLink smooth to="/#features">
                  {" "}
                  Features{" "}
                </HashLink>
              </Nav.Link>
              <Nav.Link ref={clickLink}>
                <Link to="/contact"> Contact</Link>
              </Nav.Link>
              <Nav.Link onClick={clickOver} ref={clickLink}>
                <HashLink smooth to="/#download">
                  {" "}
                  Download the app{" "}
                </HashLink>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div ref={overLayVar} onClick={func} className={props.name}></div>
    </>
  );
}
export default Header;
