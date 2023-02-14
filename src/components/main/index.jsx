import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import Frame from "../../assets/images/png/Frame93.png";
import DownloadButton from "../download-btn";
const Main = () => {
  return (
    <main className="main__home main">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Phone Tracking for protecting your mobile</h1>
            <p>
              tracking your lost mobile phone and protecting their stored data
            </p>
            <DownloadButton />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
