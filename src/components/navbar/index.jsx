import React from "react";
import Nav from "react-bootstrap/Nav";
import Over from "../overlay";
import "./index.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function NavBar(props) {
  return (
    <>
      <div className="nav__bar">
        <Nav className="me-auto">
          <Nav.Link>
            <HashLink smooth to="/#about">
              {" "}
              About app{" "}
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <HashLink smooth to="/#features">
              {" "}
              Features{" "}
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact"> Contact</Link>
          </Nav.Link>
          <Nav.Link id="downloadLink">
            <HashLink smooth to="/#download">
              {" "}
              Download the app{" "}
            </HashLink>
          </Nav.Link>
          <Nav.Link>
            <Link to="/form"> Message</Link>
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default NavBar;
