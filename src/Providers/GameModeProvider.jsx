/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";

const defaultContext = {
  gameMode: "REGULAR",
};

const GameModeContext = createContext(defaultContext);

// eslint-disable-next-line react/prop-types
const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(defaultContext.gameMode);

  const changeMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <GameModeContext.Provider value={{ gameMode, changeMode }}>
      {children}
    </GameModeContext.Provider>
  );
};

const useGameMode = () => useContext(GameModeContext);

export { GameModeProvider, useGameMode };
