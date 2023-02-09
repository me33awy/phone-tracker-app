import React from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../card";
import "./index.scss";
import AccessContact from "../../assets/images/svg/group71.svg";
import AccessLocation from "../../assets/images/svg/frame95.svg";
import AccessData from "../../assets/images/svg/group64.svg";
import AccessPermission from "../../assets/images/svg/group65.svg";
import AccessLock from "../../assets/images/svg/group58.svg";
import Contacts from "../../assets/images/icons/contacts.svg";
import Data from "../../assets/images/icons/data.svg";
import Location from "../../assets/images/icons/location.svg";
import Lock from "../../assets/images/icons/lock.svg";
import Premission from "../../assets/images/icons/premissions.svg";

const Features = () => {
  return (
    <>
      <div className="features" id="features">
        <Container>
          <h2>App features</h2>
          <div className="grid">
            <div className="d-flex card__flex">
              <CustomCard
                title="Access contacts"
                text="This feature enables you to access private contacts if you want to access a specific contact to communicate with it, send a message, or otherwise"
                icon={Contacts}
              />
              <img className="feature__img" src={AccessContact} alt="" />
            </div>
            <div className="d-flex card__flex">
              <img className="feature__img" src={AccessLocation} alt="" />
              <CustomCard
                title="Access location"
                text="This feature allows the program to access the location where your phone is now"
                icon={Location}
              />
            </div>
            <div className="d-flex card__flex">
              <CustomCard
                title="mobile data"
                text="This feature enables you to access the Mobile data of your phone to control its closing, opening, or otherwise For example, if you want to disable receiving messages through social networking programs, then turn off the mobile data"
                icon={Data}
              />
              <img className="feature__img" src={AccessData} alt="" />
            </div>
            <div className="d-flex card__flex">
              <img className="feature__img" src={AccessPermission} alt="" />
              <CustomCard
                title="Grant permission"
                text="In this feature, you choose some contacts that do not belong to you or that you do not trust to prevent them from accessing and using your personal account."
                icon={Premission}
              />
            </div>
            <div className="d-flex card__flex">
              <CustomCard
                title="Lock mobile screen"
                text="This feature enables you to control the screen lock or unlock it to access what you want from inside your phone or change the password for your phone and so on"
                icon={Lock}
              />
              <img className="feature__img" src={AccessLock} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Features;
