import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../header";
import "./index.scss";
import Logo__Alt from "../../assets/images/svg/logo-alt.svg";
import Main from "../main";
import Member from "../member";
import Member1 from "../../assets/images/jpg/abdullah.jpg";
import Member2 from "../../assets/images/jpg/amr.jpg";
import Member3 from "../../assets/images/jpg/aya.jpg";
import Member4 from "../../assets/images/jpg/sara.jpg";
import Member5 from "../../assets/images/jpg/bothina.jpg";
import Member6 from "../../assets/images/jpg/nabih.jpg";
import Member7 from "../../assets/images/jpg/tash.jpg";
import Member8 from "../../assets/images/jpg/mostafa.jpg";
import Member9 from "../../assets/images/jpg/kamal.jpg";
import Member10 from "../../assets/images/jpg/mansy.jpg";
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
                  img={Member1}
                  name="Abdullah Ismail"
                  job="Front end developer"
                />
                <Member
                  className="amr"
                  img={Member2}
                  name="Amr Mekkawy"
                  job="Front end developer"
                />
                <Member
                  img={Member3}
                  name="Aya Alshehawy"
                  job="Back end developer"
                />
                <Member
                  img={Member4}
                  name="Sara Shouman"
                  job="UI/UX Designer"
                />
                <Member
                  img={Member5}
                  name="Bothina Zaki"
                  job="UI/UX Designer"
                />
                <Member
                  img={Member6}
                  name="Mohamed Nabih"
                  job="Andriod developer"
                />
                <Member
                  img={Member7}
                  name="Mohamed Tash"
                  job="Andriod developer"
                />
                <Member
                  img={Member8}
                  name="Moamen mostafa"
                  job="Andriod developer"
                />
                <Member
                  img={Member9}
                  name="Mohamed Kamal"
                  job="Andriod developer"
                />
                <Member img={Member10} name="Mohamed Elmansy" />
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
