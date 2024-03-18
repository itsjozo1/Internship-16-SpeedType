/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";

const defaultContext = {
  gameMode: "REGULAR",
  gameLevel: 0,
};

const GameModeContext = createContext(defaultContext);

// eslint-disable-next-line react/prop-types
const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(defaultContext.gameMode);
  const [gameLevel, setGameLevel] = useState(defaultContext.gameLevel);

  const changeLevel = (level) => {
    setGameLevel(level);
  };

  const changeMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <GameModeContext.Provider
      value={{ gameMode, changeMode, gameLevel, changeLevel }}
    >
      {children}
    </GameModeContext.Provider>
  );
};

const useGameMode = () => useContext(GameModeContext);

export { GameModeProvider, useGameMode };
