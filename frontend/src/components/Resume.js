import '../css/Resume.css';
import resume from "../img/resume.png";
import { Container, Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
const openPDF = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/resume.pdf';
  window.open(pdfUrl, "_blank");
};


export default function Resume() {
  return (
    <div style={{ paddingTop: "10em",paddingBottom:'15em'}} id="resume">
      <Container className="pt-2 pb-2">
      <h3 style={{ color: "white", textAlign: "center" }}>
          My resume
        </h3>
      </Container>
      <div className="text-center">
        <img src={resume} alt="Resume" id="resume-img" />
        <div className='pt-2'>
        <Button variant="contained" size="large" onClick={openPDF}>Open resume in new tab</Button>
        </div>
      </div>
    </div>
  );
}