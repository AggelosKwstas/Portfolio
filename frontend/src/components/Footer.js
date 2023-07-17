import { Container, Col, Row } from "react-bootstrap";
import "../css/Footer.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";


export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1976d2", paddingTop: "2em" }} id="find">
      <Container maxWidth="lg">
        <Grid container spacing={1} className="d-flex justify-content-end">
          <Grid item lg={3} xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ color: "white" }}
            >
              About me
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              Aggelos Kostas - Web Developer
            </Typography>
          </Grid>
          <Grid item lg={3} xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ color: "white" }}
            >
              Contact me
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              Gerostathi 32, Ioannina, Greece
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              Email: agelos.kostas21@gmail.com
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              Phone: +30 6947011764
            </Typography>
          </Grid>
          <Grid item lg={3} xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ color: "white" }}
            >
              Follow Me
            </Typography>
            <Link
              href="https://github.com/AggelosKwstas"
              target="_blank"
              color="inherit"
              className="footer-icon"
              sx={{ color: "white" }}
            >
              <GitHub />
            </Link>
            <Link
              href="https://www.instagram.com/agelos_kostas/"
              target="_blank"
              color="inherit"
              sx={{ pl: 1, pr: 1, color: "white" }}
              className="footer-icon"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aggelos-kwstas-876447232/"
              color="inherit"
              target="_blank"
              className="footer-icon"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            style={{ fontSize: "16px" }}
            sx={{ color: "white" }}
          >
            {"Copyright © "}
            <Link
              color="inherit"
              style={{ textDecoration: "none", fontWeight: "bolder" }}
              sx={{ color: "white" }}
            >
              Aggelos Kostas
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
