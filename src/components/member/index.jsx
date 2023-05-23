import React from "react";
import "./index.scss";
const Member = (props) => {
  return (
    <div className="team__member">
      <div className="picture">
        <img src={props.img} id={props.className} alt="Team Member" />
      </div>
      <div className="name">
        <h4>{props.name}</h4>
      </div>
      <div className="job__title">
        <h5>{props.job}</h5>
      </div>
      <ul className="contact__methods d-flex">
        <li>
          <a href="">
            <img src='images/svg/whatsapp.svg' alt="whatsapp" />
          </a>
        </li>
        <li>
          <a href="">
            <img src='images/svg/linkedin.svg' alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="">
            <img src='images/svg/gmail.svg' alt="gmail" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Member;
