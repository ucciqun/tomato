import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { AddDialog } from "./AddDialog";
import "./FAB.css";

export const FAB = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="fab">
      <Fab
        style={{ backgroundColor: "#EE6352", color: "white" }}
        aria-label="add"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <AddDialog open={open} onClose={handleClose} />
    </div>
  );
};
