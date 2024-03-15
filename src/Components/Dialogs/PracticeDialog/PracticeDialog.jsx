import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
export default function NewGameDialog({ isOpen, handleClose, handleSubmit }) {
  return (
    <Dialog open={isOpen} keepMounted onClose={handleClose}>
      <DialogTitle>{"Select game mode"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Regular</Button>
        <Button onClick={handleClose}>Instant Death</Button>
      </DialogActions>
    </Dialog>
  );
}
