import React from "react";
import "./index.scss";
import { Card } from "react-bootstrap";
const CustomCard = (props) => {
  return (
    <>
      <Card className="custom__card">
        <Card.Body className="card__body">
          <div className="d-flex align-items-center">
            <img className="card__img" src={props.icon} />
            <Card.Title className="card__title">{props.title}</Card.Title>
          </div>
          <Card.Text className="card__text">{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomCard;
