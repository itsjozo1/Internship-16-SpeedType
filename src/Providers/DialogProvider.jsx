/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";

export const DIALOG = {
  NEW_GAME: "NEW_GAME",
  PRACTICE: "PRACTICE",
};

const defaultContext = {
  isOpen: false,
  open: () => {},
  close: () => {},
};

const DialogContext = createContext(defaultContext);

// eslint-disable-next-line react/prop-types
const DialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(defaultContext.isOpen);

  const close = () => {
    setIsOpen(false);
  };

  const open = (dialog) => {
    setIsOpen(dialog);
  };

  return (
    <DialogContext.Provider value={{ isOpen, open, close }}>
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = () => useContext(DialogContext);

export { DialogProvider, useDialog };
