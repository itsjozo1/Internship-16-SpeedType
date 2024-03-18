import { useDialog } from "../../Providers/DialogProvider";
import NewGameDialog from "./NewGameDialog";
import PracticeDialog from "./PracticeDialog";
import { DIALOG } from "../../Providers/DialogProvider";
import NewLevelDialog from "./NewLevelDialog";
import EndGameDialog from "./EndGameDialog";

// eslint-disable-next-line react/prop-types
const DialogsSwitch = ({ wpm, accuracy, formatTime }) => {
  const { isOpen, close } = useDialog();

  return (
    <>
      <NewGameDialog isOpen={isOpen === DIALOG.NEW_GAME} handleClose={close} />
      <PracticeDialog isOpen={isOpen === DIALOG.PRACTICE} handleClose={close} />
      <NewLevelDialog
        isOpen={isOpen === DIALOG.NEW_LEVEL}
        handleClose={close}
        wpm={wpm}
        accuracy={accuracy}
        timeElapsed={formatTime}
      />
      <EndGameDialog
        isOpen={isOpen === DIALOG.END_GAME}
        handleClose={close}
        wpm={wpm}
        accuracy={accuracy}
        timeElapsed={formatTime}
      />
    </>
  );
};

export default DialogsSwitch;
