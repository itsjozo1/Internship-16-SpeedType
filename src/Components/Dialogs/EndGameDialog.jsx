/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";
import classes from "./index.module.css";
import { useGameMode } from "../../Providers/GameModeProvider";
import { useEffect, useState } from "react";

const EndGameDialog = ({ isOpen, accuracy, wpm, timeElapsed, handleClose }) => {
  const { averageWpm, changeLevel, updateAverageWpm } = useGameMode();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [validDialogData, setValidDialogData] = useState({
    wpm: 0,
    accuracy: 0,
    timeElapsed: 0,
  });

  useEffect(() => {
    // filtrira dialoge jer se više njih rendera
    if (isOpen && wpm < 1000 && isOpenDialog !== isOpen) {
      setIsOpenDialog(isOpen);
      updateAverageWpm(wpm);
      setValidDialogData({
        wpm: wpm,
        accuracy: accuracy,
        timeElapsed: timeElapsed,
      });
    } else {
      setIsOpenDialog(isOpen);
    }
  }, [wpm, isOpen, accuracy, timeElapsed, updateAverageWpm, isOpenDialog]);

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
        Words per minute: {validDialogData.wpm}
      </DialogContentText>
      <DialogContentText className={classes.dialogContentText}>
        Accuracy: {validDialogData.accuracy}%
      </DialogContentText>
      <DialogContentText className={classes.dialogContentText}>
        Time elapsed: {validDialogData.timeElapsed} seconds
      </DialogContentText>
      <DialogContentText className={classes.dialogContentText}>
        Average wpm: {averageWpm}
      </DialogContentText>
      <DialogActions>
        <Button onClick={handleChangeLevel}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EndGameDialog;
