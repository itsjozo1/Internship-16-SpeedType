import { useState } from "react";
import { getTextsByLevel } from "../../textsHelper";
import classes from "./game.module.css";

const RegularGame = () => {
  const currentLevelTexts = getTextsByLevel("Hard");
  const expectedText = currentLevelTexts[2].text;
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
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

  return (
    <>
      <h2>Regular Mode</h2>
      <div className={classes.gameModeContainer}>
        <textarea
          className={classes.gameModeInput}
          id="gameTextInput"
          onChange={handleInputChange}
        ></textarea>
        <label className={classes.gameLabel} htmlFor="gameTextInput">
          {highlightErrors()}
        </label>
      </div>
    </>
  );
};

export default RegularGame;
