import { Box } from "@mui/material";
import { Container, Col, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Progress from "../components/Progress";

export default function Home() {
  return (
    <Box id="home" sx={{ overflowX: "hidden" }}>
      <div
        className="pt-3"
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container>
          <Bounce left>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: "5em",
              }}
            >
              Welcome to my Portfolio!
            </h3>
            <h4 style={{ color: "white", textAlign: "center" }}>
              Hi, I'm Aggelos! A passionate developer on a journey of continuous
              improvement.
            </h4>
            <h5 style={{ color: "white", textAlign: "center" }}>
              Take a look at my projects and don't hesitate to contact me
              directly!
            </h5>
          </Bounce>
        </Container>
      </div>
      <Container style={{ paddingTop: "15em" }}>
        <Bounce right>
          <h3 style={{ color: "white", textAlign: "center" }}>
            Education and Work Experience
          </h3>
        </Bounce>
        <div className="pt-5">
          <Progress />
        </div>
      </Container>
    </Box>
  );
}
