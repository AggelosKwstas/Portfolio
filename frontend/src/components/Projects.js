import { Container, Col, Row } from "react-bootstrap";
import { Box } from "@mui/material";

import yii from "../img/yii2.png";
import css from "../img/css-3.png";
import js from "../img/js.png";
import tauri from "../img/tauri.png";
import react from "../img/react.png";
import php from "../img/php.png";

import gaia1 from "../img/gaia1.png";
import gaia2 from "../img/gaia2.png";
import gaia3 from "../img/gaia3.png";
import gaia4 from "../img/gaia4.png";

import desktop1 from "../img/desktop1.png";
import desktop2 from "../img/desktop2.png";
import desktop3 from "../img/desktop3.png";

import lab1 from "../img/lab1.png";
import lab2 from "../img/lab2.png";
import lab3 from "../img/lab3.png";

import idean1 from "../img/idean1.png";
import idean2 from "../img/idean2.png";

import Slide from "react-reveal/Bounce";
import Card from "../components/Card";

const projectParagraphs = {
  "Gaia Platform": {
    name: "GAIA Platform",
    body: "GAIA Platform ensures real-time monitoring of air and water quality, detecting pollutants for informed decisions.",
    image1: yii,
    image2: css,
    image3: js,
    tooltip1: "Yii2",
    tooltip2: "CSS",
    tooltip3: "JavaScript",
    images: [
      {
        imgPath: gaia1,
      },
      {
        imgPath: gaia2,
      },
      {
        imgPath: gaia3,
      },
      {
        imgPath: gaia4,
      },
    ],
  },
  "Gaia Platform - Desktop": {
    name: "GAIA - Desktop",
    body: "GAIA Platform also offers a desktop app, providing same functionalities as the website alternative (Only Windows)",
    image1: react,
    image2: tauri,
    image3: css,
    tooltip1: "React",
    tooltip2: "Tauri",
    tooltip3: "CSS",
    images: [
      {
        imgPath: desktop1,
      },
      {
        imgPath: desktop2,
      },
      {
        imgPath: desktop3,
      },
    ],
  },
  Equipment: {
    name: "Equipment",
    body: "Internal company initiative for streamlined management of company equipment and resources.",
    image1: yii,
    image2: css,
    image3: js,
    tooltip1: "Yii2",
    tooltip2: "CSS",
    tooltip3: "JavaScript",
    images: [
      {
        imgPath: lab1,
      },
      {
        imgPath: lab2,
      },
      {
        imgPath: lab3,
      },
    ],
  },
  "Idean Platform": {
    name: "Idean Platform",
    body: "Personalized online training platform for educational enrichment and skill development.",
    image1: php,
    image2: css,
    image3: js,
    tooltip1: "PHP",
    tooltip2: "CSS",
    tooltip3: "JavaScript",
    images: [
      {
        imgPath: idean2,
      },
      {
        imgPath: idean1,
      },
    ],
  },
};

export default function Projects() {
  return (
    <Slide left>
      <Box style={{ paddingTop: "20em" }} id="projects">
        <Container>
          <h3 style={{ color: "white", textAlign: "center" }}>
            Project examples
          </h3>
          <h5 style={{ color: "white", textAlign: "center" }}>
            Overview for some of my projects!
          </h5>
          <Row>
            {Object.entries(projectParagraphs).map(
              ([
                project,
                {
                  name,
                  body,
                  image1,
                  image2,
                  image3,
                  tooltip1,
                  tooltip2,
                  tooltip3,
                  images,
                },
              ]) => (
                <Col
                  lg="3"
                  md="6"
                  sm="12"
                  xs="12"
                  className="mb-3 mb-sm-2 mb-md-2 d-flex justify-content-center"
                  key={project}
                >
                  <Card
                    name={name}
                    body={body}
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    tooltip1={tooltip1}
                    tooltip2={tooltip2}
                    tooltip3={tooltip3}
                    images={images}
                    key={project}
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      </Box>
    </Slide>
  );
}
