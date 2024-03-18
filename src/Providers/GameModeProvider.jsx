/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState } from "react";
import { getTextsByLevel } from "../textsHelper";

const defaultContext = {
  gameMode: "REGULAR",
  gameLevel: 0,
};

const GameModeContext = createContext(defaultContext);

const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(defaultContext.gameMode);
  const [gameLevel, setGameLevel] = useState(defaultContext.gameLevel);
  let expectedText = "";

  if (gameLevel !== 0) {
    const textsByLevel = getTextsByLevel(gameLevel);
    expectedText =
      textsByLevel[Math.floor(Math.random() * textsByLevel.length)].text;
  }
  const changeLevel = (level) => {
    setGameLevel(level);
  };

  const changeMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <GameModeContext.Provider
      value={{ gameMode, changeMode, gameLevel, changeLevel, expectedText }}
    >
      {children}
    </GameModeContext.Provider>
  );
};

const useGameMode = () => useContext(GameModeContext);

export { GameModeProvider, useGameMode };
