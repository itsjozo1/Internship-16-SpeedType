import { useState, useEffect } from "react";
import classes from "./game.module.css";
import { useGameMode } from "../../Providers/GameModeProvider";
import DialogsSwitch from "../Dialogs/DialogsSwitch";
import { DIALOG, useDialog } from "../../Providers/DialogProvider";

const RegularGame = () => {
  const { open, isOpen } = useDialog(); // Accessing the open, isOpen, and close methods from useDialog hook
  const { expectedText, gameLevel, changeLevel } = useGameMode();
  const [userInput, setUserInput] = useState("");
  const [stopwatchStarted, setStopwatchStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  console.log(isOpen);

  useEffect(() => {
    if (gameLevel === 0) {
      changeLevel(1);
    }
    setIsDialogOpen(false);
    setStopwatchStarted(false);
    setElapsedTime(0);
    setGameCompleted(false);
    setUserInput("");
    document.getElementById("gameTextInput").value = "";
  }, [gameLevel, changeLevel]);

  useEffect(() => {
    let intervalId;
    if (stopwatchStarted && !gameCompleted) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    if (gameCompleted && isDialogOpen === false) {
      gameLevel === 3 ? open(DIALOG.END_GAME) : open(DIALOG.NEW_LEVEL);
      setIsDialogOpen(true);
    }
    return () => clearInterval(intervalId);
  }, [stopwatchStarted, gameCompleted, open, isDialogOpen, gameLevel]);

  const handleInputChange = (event) => {
    if (!stopwatchStarted) {
      setStopwatchStarted(true);
    }

    let newValue = event.target.value;
    let newValueArray = userInput.split("");

    if (event.nativeEvent.inputType === "deleteContentBackward") {
      setUserInput(userInput.slice(0, -1));
      newValueArray = newValue.slice(0, -1);
    } else {
      setUserInput(userInput + newValue[newValue.length - 1]);
    }

    const clearedValueArray = newValueArray.map((char, index) => {
      if (index < userInput.length) {
        return " ";
      }
      return char;
    });
    event.target.value = " " + clearedValueArray.join("");

    if (newValueArray.length === expectedText.length - 1) {
      setGameCompleted(true);
      setStopwatchStarted(false);
    }
  };

  const highlightErrors = () => {
    const expectedTextArray = expectedText.split("");
    const userInputArray = userInput.split("");

    return expectedTextArray.map((char, index) => {
      if (index >= userInputArray.length) {
        return <span key={index}>{char}</span>;
      }
      return (
        <span
          key={index}
          className={
            char === userInputArray[index] ? classes.correct : classes.incorrect
          }
        >
          {char}
        </span>
      );
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const calculateWPM = () => {
    const wordsTyped = expectedText.trim().split(" ").filter(Boolean).length;
    const minutes = elapsedTime / 60;
    const wpm = wordsTyped / minutes;
    return Math.round(wpm);
  };

  const calculateAccuracy = () => {
    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === expectedText[i]) {
        correctChars++;
      }
    }
    const accuracy = Math.floor((correctChars / expectedText.length) * 100);
    return accuracy;
  };

  return (
    <>
      <h2>Regular Mode</h2>
      {stopwatchStarted && (
        <p className={classes.stopwatch}>Time: {formatTime(elapsedTime)}</p>
      )}
      <div className={classes.gameModeContainer}>
        <textarea
          className={classes.gameModeInput}
          id="gameTextInput"
          onChange={handleInputChange}
          disabled={gameCompleted}
        ></textarea>
        <label className={classes.gameLabel} htmlFor="gameTextInput">
          {highlightErrors()}
        </label>
      </div>
      {
        <DialogsSwitch
          wpm={calculateWPM()}
          accuracy={calculateAccuracy()}
          formatTime={formatTime(elapsedTime)}
        />
      }
    </>
  );
};

export default RegularGame;
