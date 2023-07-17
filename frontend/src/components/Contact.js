import React from "react";
import "../css/Contact.css";
import message from "../img/email.png";
import { Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <div className="centered-container">
        <div className="con">
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <img src={message} style={{ width: "30px" }} alt="Message Icon" />
            </Col>
            <Col xs="auto">
              <h2 className="login-title mb-0">Contact me</h2>
            </Col>
          </Row>
          <form className="login-form">
            <div>
              <label for="name">Name </label>
              <input
                id="name"
                type="text"
                placeholder="Example"
                name="name"
                required
              />
            </div>

            <div>
              <label for="email">Email </label>
              <input
                id="email"
                type="email"
                placeholder="Example@gmail.com"
                name="email"
                required
              />
            </div>

            <div>
              <label for="body">Message </label>
              <textarea
                id="text"
                type="text"
                placeholder="Example message"
                name="text"
                style={{ resize: "none" }}
                required
              />
            </div>

            <button className="btn btn--form" type="submit" value="Log in">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
