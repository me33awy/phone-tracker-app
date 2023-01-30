import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import Frame from "../../../assets/images/png/Frame93.png";
const Main = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Phone Tracking for protecting your mobile</h1>
            <p>
              tracking your lost mobile phone and protecting their stored data
            </p>
            <Button>Download The App</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
