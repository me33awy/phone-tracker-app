import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../header";
import "./index.scss";
import Logo__Alt from "../../assets/images/svg/logo-alt.svg";
import Main from "../main";
import Member from "../member";
import { Block } from "react-loader-spinner";
import { useLoadingContext } from "react-router-loading";
import { InfinitySpin } from "react-loader-spinner";
import NavBar from "../navbar";
import Footer from "../footer";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(loading);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(!loading);
    };
    console.log(loading);

    loadData();
  }, []);
  const [color, setColor] = useState();
  const headerBackground = useRef();
  function changeBackground() {
    if (window.scrollY > 66) {
      headerBackground.current.style.backgroundColor = "rgb(190, 155, 250)";
      setColor(true);
    } else {
      headerBackground.current.style.backgroundColor = "transparent";
      setColor(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  if (loading) {
    return (
      <>
        <div id="contact">
          <Header
            className="header__alt"
            logo={Logo__Alt}
            mobile="mobile__contact"
            name="overlay__contact"
            ref={headerBackground}
          />
          <div className="main__contact main">
            <Container>
              <div className="d-flex text-center justify-content-center align-items-center">
                <div className="content">
                  <h2>Contact with us</h2>
                  <p>
                    We are a team studying at Mansoura University, Faculty of
                    Computers and Information. We have worked together on a
                    phone tracking project to protect your phone{" "}
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <div className="contact__grid">
            <Container>
              <div className="grid__layout">
                <Member
                  img="images/jpg/abdullah.jpg"
                  name="Abdullah Ismail"
                  job="Front end developer"
                />
                <Member
                  className="amr"
                  img='images/jpg/amr.png'
                  name="Amr Mekkawy"
                  job="Front end developer"
                />
                <Member
                  img='images/jpg/aya.jpg'
                  name="Aya Alshehawy"
                  job="Back end developer"
                />
                <Member
                  img='images/jpg/sara.jpg'
                  name="Sara Shouman"
                  job="UI/UX Designer"
                />
                <Member
                  img='images/jpg/bothina.jpg'
                  name="Bothina Zaki"
                  job="UI/UX Designer"
                />
                <Member
                  img='images/jpg/nabih.jpg'
                  name="Mohamed Nabih"
                  job="Andriod developer"
                />
                <Member
                  img='images/jpg/tash.jpg'
                  name="Mohamed Tash"
                  job="Andriod developer"
                />
                <Member
                  img='images/jpg/mostafa.jpg'
                  name="Moamen mostafa"
                  job="Andriod developer"
                />
                <Member
                  img='images/jpg/kamal.jpg'
                  name="Mohamed Kamal"
                  job="Andriod developer"
                />
                <Member img='images/jpg/mansy.jpg' name="Mohamed Elmansy" />
              </div>
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="loading d-flex align-items-center justify-content-center vh-100">
          <InfinitySpin width="200" color="rgb(29, 155, 240)" />
        </div>
      </>
    );
  }
};

export default Contact;
