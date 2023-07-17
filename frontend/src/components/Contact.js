import React, { useState } from "react";
import "../css/Contact.css";
import messageIcon from "../img/email.png";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import SuccessAlert from "./SucessAlert";
import BadAlert from "./BadAlert";
import ValidationAlert from "./ValidationAlert";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [alert, setAlert] = useState(false);
  const [bad, setBad] = useState(false);
  const [validation, setValidation] = useState(false);
  const [open, setOpen] = useState(true);

  const handleCloseAlert = () => {
    setOpen(false);
    setAlert(false);
    setValidation(false);
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    setOpen(true);

    if (!name || !email || !subject || !message) {
      setValidation(true);
      return;
    }

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

        setAlert(true);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error.name);
        console.log("Error:", error.message);
        setBad(true);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      });
  };

  return (
    <div>
      <Row>
        {validation && (
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <ValidationAlert open={open} handleClick={handleCloseAlert} />
          </div>
        )}
        {bad && (
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <BadAlert />
          </div>
        )}
        {alert && (
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <SuccessAlert open={open} handleClick={handleCloseAlert} />
          </div>
        )}
        <div className="centered-container" style={{ paddingBottom: "-500px" }}>
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
                  id="subject"
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
                  id="message"
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
      </Row>
    </div>
  );
}
