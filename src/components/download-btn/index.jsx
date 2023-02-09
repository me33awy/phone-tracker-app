import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./index.scss";
const DownloadButton = () => {
  return (
    <a>
      <Button className="download-button">Download The App </Button>
    </a>
  );
};

export default DownloadButton;
