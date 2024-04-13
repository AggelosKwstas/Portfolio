import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import dit from "../img/logo.png";
import univeye from "../img/univeye.png";
import deloitte from "../img/deloitte_logo.jpg";
import "../css/Navbar.css";
import Bounce from "react-reveal/Bounce";

const steps = [
  "BSc in Informatics",
  "8 Month Work Experience at Univeye IKE",
  "Currently working for Deloitte Digital",
];

export default function HorizontalLinearAlternativeLabelStepper() {
  const getRandomIcon = (index) => {
    const icons = [dit, univeye, deloitte];

    if (index === 0) return icons[0];
    else if (index === 1) return icons[1];
    else if (index === 2) return icons[2];
  };

  const RedirectFunction = (index) => {
    if (index === 0) window.open("https://www.dit.uoi.gr/");
    else if (index === 1) window.open("https://univeye.com/");
    else return window.open("https://www2.deloitte.com/gr/en.html");
  };

  return (
    <Bounce right>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label, index) => {
            const IconComponent = getRandomIcon(index);

            return (
              <Step key={label}>
                <StepLabel
                  icon={
                    <a
                      id="step-icon"
                      onClick={() => RedirectFunction(index)}
                      target="_blank"
                    >
                      <img
                        style={{ width: "32px" }}
                        src={IconComponent}
                        alt="Icon"
                      />
                    </a>
                  }
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Bounce>
  );
}
