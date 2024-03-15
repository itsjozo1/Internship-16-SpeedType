import { useDialog } from "../../Providers/DialogProvider";
import PracticeDialog from "./NewGameDialog/NewGameDialog";
import NewGameDialog from "./PracticeDialog/PracticeDialog";
import { DIALOG } from "../../Providers/DialogProvider";

const DialogsSwitch = () => {
  const { isOpen, close } = useDialog();

  return (
    <>
      <NewGameDialog isOpen={isOpen === DIALOG.NEW_GAME} handleClose={close} />
      <PracticeDialog isOpen={isOpen === DIALOG.PRACTICE} handleClose={close} />
    </>
  );
};

export default DialogsSwitch;
