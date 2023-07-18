import { Box } from "@mui/material";
import { Container } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Progress from "../components/Progress";
import code from "../img/code.png";
import ReactTypingEffect from "react-typing-effect";
import Jump from 'react-reveal/Jump';
import '../css/Home.css';


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
          <Jump>
            <div className="image-container">
            <img
            className="image"
              src={code}
              alt="code"
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: "5em",
                width: "13em",
              }}
            ></img>
            </div>
            </Jump>
            <Bounce left>
            <div style={{ paddingTop: "5em" }}>
              <h2 style={{ color: "white", textAlign: "center" }}>
                <ReactTypingEffect
                  text={["Hi There! I'm Aggelos Kostas"]}
                  speed={100}
                  eraseDelay={5000}
                  eraseSpeed = {100}
                  typingDelay={1500}
                />
              </h2>
              <h5 style={{ color: "white", textAlign: "center",fontSize:'17px'}}>
                A passionate developer on a journey of continuous improvement.
                <br></br>
                Take a look at my projects and don't hesitate to contact me
                directly!
              </h5>
            </div>
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
