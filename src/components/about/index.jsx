import React from "react";
import { Container, Row } from "react-bootstrap";
import "./index.scss";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <Container>
          <div className="content text-center d-flex flex-column">
            <div className="about__title">
              <h3>About phone tracking app</h3>
            </div>
            <div className="about__paragraph">
              <p>
                This app focuses on providing a portable solution for finding
                lost smartphones by developing an android application. Phone
                Tracking without the Internet is the trade name we chose for our
                app, which is an application running the Android operating
                system and aims to help every person whose phone has been lost,
                stolen, or forgotten somewhere
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
