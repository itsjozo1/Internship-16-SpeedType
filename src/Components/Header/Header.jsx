import classes from "./index.module.css";
import { Button } from "@mui/material";
import ThemeIcon from "../ThemeIcon/ThemeIcon";

function Header() {
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.headerHeadline}>Typing Game</h1>
      <div className={classes.headerButtonsContainer}>
        <Button variant="outlined" size="medium">
          Practice
        </Button>
        <Button variant="outlined" size="medium">
          New Game
        </Button>
        <ThemeIcon />
      </div>
    </div>
  );
}

export default Header;
