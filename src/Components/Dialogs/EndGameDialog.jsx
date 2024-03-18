/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";
import classes from "./index.module.css";
import { useGameMode } from "../../Providers/GameModeProvider";

const EndGameDialog = ({ isOpen, accuracy, wpm, timeElapsed, handleClose }) => {
  const { changeLevel } = useGameMode();

  const handleChangeLevel = () => {
    changeLevel(0);
    handleClose();
  };

  return (
    <Dialog open={isOpen} keepMounted onClose={handleClose}>
      <DialogTitle>
        {"You have passed last level, do you want to replay game?"}
      </DialogTitle>
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
        <Button onClick={handleClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EndGameDialog;
