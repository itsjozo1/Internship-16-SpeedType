import classes from "./index.module.css";
import { Button } from "@mui/material";
import ThemeIcon from "../ThemeIcon/ThemeIcon";
import { DIALOG, useDialog } from "../../Providers/DialogProvider";
import DialogsSwitch from "../Dialogs/DialogsSwitch";
import KeyboardIcon from "@mui/icons-material/Keyboard";

function Header() {
  const { open } = useDialog();

  const handlePracticeClick = () => {
    open(DIALOG.PRACTICE);
  };

  const handleNewGameClick = () => {
    open(DIALOG.NEW_GAME);
  };

  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.headerHeadline}>
        <KeyboardIcon className={classes.keyboardIcon} />
        Typing Game
      </h1>
      <div className={classes.headerButtonsContainer}>
        <Button
          className={classes.headerButton}
          variant="outlined"
          size="medium"
          onClick={handlePracticeClick}
        >
          Practice
        </Button>
        <Button
          className={classes.headerButton}
          variant="outlined"
          size="medium"
          onClick={handleNewGameClick}
        >
          New Game
        </Button>
        <ThemeIcon />
        <DialogsSwitch />
      </div>
    </div>
  );
}

export default Header;
