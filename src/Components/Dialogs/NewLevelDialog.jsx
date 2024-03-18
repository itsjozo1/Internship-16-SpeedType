/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";
import classes from "./index.module.css";
import { useGameMode } from "../../Providers/GameModeProvider";

const NewLevelDialog = ({
  isOpen,
  accuracy,
  wpm,
  timeElapsed,
  handleClose,
}) => {
  const { gameLevel, changeLevel } = useGameMode();

  const handleChangeLevel = () => {
    changeLevel(gameLevel + 1);
    handleClose();
  };

  return (
    <Dialog open={isOpen} keepMounted onClose={handleClose}>
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
        <Button onClick={handleClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewLevelDialog;
