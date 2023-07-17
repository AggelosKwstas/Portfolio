import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { positions } from "react-alert";


export default function SuccessAlert({ open , handleClick }) {

  const options = {
    position: positions.MIDDLE,
  };

  return (
    <div style={{ margin: "auto", width: "260px" }}>
      <Collapse in={open}>
        <Alert
          severity="success"
          {...options}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClick}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ fontWeight: "600" }}
        >
          Successfully sent email.
        </Alert>
      </Collapse>
    </div>
  );
}
