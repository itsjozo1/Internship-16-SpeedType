import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";
import classes from "./index.module.css";
import { useGameMode } from "../../Providers/GameModeProvider";

// eslint-disable-next-line react/prop-types
const NewLevelDialog = ({ isOpen, accuracy, wpm, timeElapsed }) => {
  const [open, setOpen] = useState(isOpen);
  const { gameLevel, changeLevel } = useGameMode();

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleChangeLevel = () => {
    changeLevel(gameLevel + 1);
    setOpen(false);
  };

  return (
    <Dialog open={open} keepMounted onClose={() => setOpen(false)}>
      <DialogTitle>{"Do you want to proceed to the next level?"}</DialogTitle>
      <DialogContentText className={classes.dialogContentText}>
        Words per minute: {wpm}
      </DialogContentText>
      <DialogContentText className={classes.dialogContentText}>
        Accuracy: {accuracy}%
      </DialogContentText>
      <DialogContentText className={classes.dialogContentText}>
        Time elapsed: {timeElapsed} seconds
      </DialogContentText>
      <DialogActions>
        <Button onClick={handleChangeLevel}>Yes</Button>
        <Button onClick={() => setOpen(false)}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewLevelDialog;
