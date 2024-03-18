/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState } from "react";
import { getTextsByLevel } from "../textsHelper";

const defaultContext = {
  gameMode: "REGULAR",
  gameLevel: 0,
  averageWpm: 0,
};

const GameModeContext = createContext(defaultContext);

const GameModeProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState(defaultContext.gameMode);
  const [gameLevel, setGameLevel] = useState(defaultContext.gameLevel);
  const [averageWpm, setAverageWpm] = useState(defaultContext.averageWpm);
  const [totalPlayedGames, setTotalPlayedGames] = useState(1);
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

  const updateAverageWpm = (wpm) => {
    setTotalPlayedGames(totalPlayedGames + 1);
    console.log(totalPlayedGames);
    setAverageWpm((averageWpm + wpm) / totalPlayedGames);
  };

  return (
    <GameModeContext.Provider
      value={{
        gameMode,
        changeMode,
        gameLevel,
        changeLevel,
        expectedText,
        averageWpm,
        updateAverageWpm,
      }}
    >
      {children}
    </GameModeContext.Provider>
  );
};

const useGameMode = () => useContext(GameModeContext);

export { GameModeProvider, useGameMode };
