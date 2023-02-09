import React from "react";
import CustomCollapse from "../collapse";
import { Container } from "react-bootstrap";
import "./index.scss";
const Problems = () => {
  return (
    <div className="problems">
      <Container>
        <h2>The problems that the app solved</h2>
        <CustomCollapse
          text="Forgot your phone at home? Want to get the contact’s number to make an important call?"
          paragraph="Just send an SMS to your phone with a contact name and you will get the number back as an SMS.
          "
        />
        <CustomCollapse
          text="Did you ever misplace your phone at home and you made the whole world upside down to search for it?"
          paragraph="Our app will help you change the sound profile of the phone from silent to normal mode so you could search for it easily."
        />
        <CustomCollapse
          text="Lost your phone want to know where is it exactly?"
          paragraph="Our app will send you an SMS with your phone's current location immediately.
          "
        />
        <CustomCollapse
          text="Want to lock your phone?"
          paragraph="Phone Tracking will help you lock your screen immediately"
        />
      </Container>
    </div>
  );
};

export default Problems;
