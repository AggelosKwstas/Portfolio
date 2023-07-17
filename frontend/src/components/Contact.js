import React, { useState } from "react";
import "../css/Contact.css";
import messageIcon from "../img/email.png";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    axios
      .post("http://localhost:3001/contact", contactData)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="centered-container">
        <div className="con">
          <Row className="align-items-center justify-content-center">
            <Col xs="auto">
              <img
                src={messageIcon}
                style={{ width: "30px" }}
                alt="Message Icon"
              />
            </Col>
            <Col xs="auto">
              <h2 className="login-title mb-0">Contact me</h2>
            </Col>
          </Row>
          <form
            className="login-form"
            method="POST"
            onSubmit={handleContactSubmit}
          >
            <div>
              <label for="name">Name </label>
              <input
                id="name"
                type="text"
                placeholder="Example"
                name="name"
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
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
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div>
              <label for="Subject">Subject </label>
              <input
                id="Subject"
                type="text"
                placeholder="Example"
                name="Subject"
                required
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
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
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>

            <button
              className="btn btn--form"
              type="submit"
              value="Log in"
              onClick={handleContactSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
