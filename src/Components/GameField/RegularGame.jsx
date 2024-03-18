import { useState, useEffect } from "react";
import { getTextsByLevel } from "../../textsHelper";
import classes from "./game.module.css";
import NewLevelDialog from "../Dialogs/NewLevelDialog";

const RegularGame = () => {
  const currentLevelTexts = getTextsByLevel(2);
  const randomIndex = Math.floor(Math.random() * currentLevelTexts.length);
  const expectedText = currentLevelTexts[randomIndex].text;
  const [userInput, setUserInput] = useState("");
  const [stopwatchStarted, setStopwatchStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    let intervalId;
    if (stopwatchStarted && !gameCompleted) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [stopwatchStarted, gameCompleted]);

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
      {<NewLevelDialog isOpen={gameCompleted} />}
    </>
  );
};

export default RegularGame;
