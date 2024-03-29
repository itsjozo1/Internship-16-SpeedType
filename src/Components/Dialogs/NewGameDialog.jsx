import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useGameMode } from "../../Providers/GameModeProvider";

// eslint-disable-next-line react/prop-types
export default function NewGameDialog({ isOpen, handleClose }) {
  const { changeMode, changeLevel } = useGameMode();

  const handleNewGameClick = () => {
    changeLevel(0);
    changeMode("Regular");
    handleClose();
  };

  const handleInstantDeathClick = () => {
    changeLevel(0);
    changeMode("Instant Death");
    handleClose();
  };

  return (
    <Dialog open={isOpen} keepMounted onClose={handleClose}>
      <DialogTitle>{"Select game mode"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleNewGameClick}>Regular</Button>
        <Button onClick={handleInstantDeathClick}>Instant Death</Button>
      </DialogActions>
    </Dialog>
  );
}
