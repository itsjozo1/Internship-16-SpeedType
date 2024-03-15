import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
export default function PracticeDialog({ isOpen, handleClose, handleSubmit }) {
  return (
    <Dialog open={isOpen} keepMounted onClose={handleClose}>
      <DialogTitle>{"Do you want to enter practice mode?"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleSubmit}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
}
