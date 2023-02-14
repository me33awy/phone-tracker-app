import React from "react";
import { Container } from "react-bootstrap";
import Header from "../header";
import "./index.scss";
import Logo__Alt from "../../assets/images/svg/logo-alt.svg";
import Main from "../main";
import Member from "../member";
import Member1 from "../../assets/images/jpg/abdullah.jpg";
import Member2 from "../../assets/images/jpg/amr.jpg";
const Contact = () => {
  return (
    <div id="contact">
      <Header
        className="header__alt"
        logo={Logo__Alt}
        mobile="mobile__contact"
        name="overlay__contact"
      />
      <div className="main__contact main">
        <Container>
          <div className="d-flex text-center justify-content-center align-items-center">
            <div className="content">
              <h2>Contact with us</h2>
              <p>
                We are a team studying at Mansoura University, Faculty of
                Computers and Information. We have worked together on a phone
                tracking project to protect your phone{" "}
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
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
            <Member
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
            <Member
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
            <Member
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
            <Member
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
            <Member
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
            <Member
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
            <Member
              img={Member1}
              name="Abdullah Ismail"
              job="Front end developer"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
