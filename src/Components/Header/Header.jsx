import classes from "./index.module.css";
import { Button } from "@mui/material";
import { DIALOG, useDialog } from "../../Providers/DialogProvider";
import DialogsSwitch from "../Dialogs/DialogsSwitch";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { useGameMode } from "../../Providers/GameModeProvider";

function Header() {
  const { open } = useDialog();
  const { gameLevel, averageWpm } = useGameMode();

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
      <div>
        <p>{gameLevel === 0 ? "" : "Level: " + gameLevel}</p>
        <p>{averageWpm === 0 ? "" : "Average WPM: " + averageWpm}</p>
      </div>
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
        <DialogsSwitch />
      </div>
    </div>
  );
}

export default Header;
