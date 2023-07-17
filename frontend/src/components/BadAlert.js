import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { positions } from "react-alert";

export default function ErrorAlert() {
  const [open, setOpen] = useState(true);

  const options = {
    position: positions.MIDDLE,
  };

  return (
    <div style={{ margin: "auto", width: "280px" }}>
      <Collapse in={open}>
        <Alert
          severity="error"
          {...options}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ fontWeight: "600" }}
        >
          Error while sending email.
        </Alert>
      </Collapse>
    </div>
  );
}
