import React from "react";
import "./index.scss";
import Whatapp from "../../assets/images/svg/whatsapp.svg";
import Gmail from "../../assets/images/svg/gmail.svg";
import Linkedin from "../../assets/images/svg/linkedin.svg";
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
            <img src={Whatapp} alt="whatsapp" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Gmail} alt="gmail" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Member;
