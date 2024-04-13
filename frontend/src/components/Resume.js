import "../css/Resume.css";
import resume from "../img/resumeUpdated.jpg";
import { Container, Col, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import Slide from "react-reveal/Bounce";
const openPDF = () => {
  const pdfUrl = process.env.PUBLIC_URL + "/resumeUpdated.pdf";
  console.log(pdfUrl);
  window.open(pdfUrl, "_blank");
};

export default function Resume() {
  return (
    <Slide right>
      <div style={{ paddingTop: "10em", paddingBottom: "5em" }} id="resume">
        <Container className="pt-2 pb-2">
          <h3 style={{ color: "white", textAlign: "center" }}>My resume</h3>
        </Container>
        <div className="text-center">
          <img src={resume} alt="Resume" id="resume-img" />
          <div className="pt-2">
            <Button variant="contained" size="large" onClick={openPDF}>
              Open resume in new tab
            </Button>
          </div>
        </div>
      </div>
    </Slide>
  );
}
