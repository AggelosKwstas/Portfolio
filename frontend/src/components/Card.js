import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Slide from "react-reveal/Bounce";

import axios from "axios";

import CardCarousel from "./CardCarousel";
import { Row, Col } from "react-bootstrap";

const redirectWebsite = (name) => {
  if (name === "GAIA Platform") window.open("https://gaia-platform.eu/");
  else window.open("https://elearning.idean-cluster.gr/login/index.php");
};

// node logic
const downloadGAIA = async () => {
  try {
    const response = await axios.get("https://aggeloskostas-backend.onrender.com/backend/download", {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "GAIA Platform_1.1.0_x64_en-US.msi");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error.name);
  }
};

export default function MediaCard({
  name,
  body,
  image1,
  image2,
  image3,
  tooltip1,
  tooltip2,
  tooltip3,
  images,
}) {
  return (
    <Slide left>
      <Card sx={{ maxWidth: 345 }}>
        <CardCarousel images={images} />
        <CardContent>
          <Row>
            <Col>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "15px" }}
              >
                {name}
              </Typography>
            </Col>
            <Col>
              <div style={{ float: "right", cursor: "pointer" }}>
                <Tooltip
                  placement="top-end"
                  title={<Typography fontSize={18}>{tooltip1}</Typography>}
                  arrow
                >
                  <img
                    src={image1}
                    style={{ width: "25px", padding: "3px" }}
                  ></img>
                </Tooltip>
                <Tooltip
                  placement="top-end"
                  title={<Typography fontSize={18}>{tooltip2}</Typography>}
                  arrow
                >
                  <img
                    src={image2}
                    style={{ width: "25px", padding: "3px" }}
                  ></img>
                </Tooltip>
                <Tooltip
                  placement="top-end"
                  title={<Typography fontSize={18}>{tooltip3}</Typography>}
                  arrow
                >
                  <img
                    src={image3}
                    style={{ width: "25px", padding: "3px" }}
                  ></img>
                </Tooltip>
              </div>
            </Col>
          </Row>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontSize: "18px", textAlign: "center" }}
          >
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          {name === "GAIA Platform" || name === "Idean Platform" ? (
            <Button
              variant="contained"
              style={{ marginLeft: "auto", marginRight: "auto" }}
              size="large"
              onClick={() => redirectWebsite(name)}
            >
              Go to website
            </Button>
          ) : name === "Equipment" ? (
            <Button
              variant="contained"
              disabled
              style={{ marginLeft: "auto", marginRight: "auto" }}
              size="large"
            >
              Private website
            </Button>
          ) : null}
          {name === "GAIA - Desktop" && (
            <Button
              variant="contained"
              style={{ marginLeft: "auto", marginRight: "auto" }}
              size="large"
              onClick={downloadGAIA}
            >
              <Tooltip
                placement="bottom"
                title={<Typography fontSize={18}>Windows only</Typography>}
                arrow
              >
                Download Installer
              </Tooltip>
            </Button>
          )}
        </CardActions>
      </Card>
    </Slide>
  );
}
