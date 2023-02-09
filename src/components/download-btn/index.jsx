import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./index.scss";
import Pdf from "../../assets/pdf/table.pdf";
const DownloadButton = () => {
  return (
    <a download={Pdf}>
      <Button className="download-button">Download The App </Button>
    </a>
  );
};

export default DownloadButton;
