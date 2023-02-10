import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./index.scss";
import AppDownload from "../../assets/images/svg/logo.svg";
const DownloadButton = () => {
  return (
    <a href={AppDownload} download>
      <Button className="download-button">Download The App </Button>
    </a>
  );
};

export default DownloadButton;
