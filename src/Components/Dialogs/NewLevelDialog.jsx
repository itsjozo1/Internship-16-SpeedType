import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
const NewLevelDialog = ({ isOpen }) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Dialog open={open} keepMounted onClose={() => setOpen(false)}>
      <DialogTitle>{"Do you want to proceed to the next level?"}</DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Yes</Button>
        <Button onClick={() => setOpen(false)}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewLevelDialog;
