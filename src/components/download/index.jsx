import React from "react";
import { Container } from "react-bootstrap";
import DownloadButton from "../download-btn";
import { Button } from "react-bootstrap";
import "./index.scss";
import AppDownload from "../../assets/images/svg/logo.svg";

const Download = () => {
  return (
    <div className="download" id="download">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <h4 className="text-center">
            Tracking your lost mobile phone and protecting their stored data
          </h4>
          <a href={AppDownload} download>
            <Button className="download-button alt-btn">
              Download The App{" "}
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
};
export default Download;
