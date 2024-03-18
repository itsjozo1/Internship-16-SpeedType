/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useGameMode } from "../../Providers/GameModeProvider";

export default function PracticeDialog({ isOpen, handleClose }) {
  const { changeMode } = useGameMode();

  const handleSubmit = () => {
    changeMode("Practice");
    handleClose();
  };

  return (
    <Dialog open={isOpen} keepMounted onClose={handleClose}>
      <DialogTitle>{"GAME OVER, do you want to start over?"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
}
