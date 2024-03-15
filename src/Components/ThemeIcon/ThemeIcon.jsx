import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import classes from "./index.module.css";

const ThemeIcon = () => {
  return (
    <IconButton>
      <LightModeIcon className={classes.lightModeIcon} color="primary" />
    </IconButton>
  );
};

export default ThemeIcon;
