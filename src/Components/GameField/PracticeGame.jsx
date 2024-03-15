import { useState, useEffect, useRef } from "react";
import classes from "./game.module.css";

const PracticeGame = () => {
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();

    const handleKeyPress = () => {
      textareaRef.current.focus();
    };

    document.body.addEventListener("keypress", handleKeyPress);

    return () => {
      document.body.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  const handleTextareaChange = (event) => {
    const text = event.target.value;
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <div>
      <h2>Practice Mode</h2>
      <p className={classes.wordCount}>{wordCount}</p>
      <textarea
        ref={textareaRef}
        className={classes.practiceModeContainer}
        type="text"
        spellCheck="false"
        onChange={handleTextareaChange}
      />
      <p className={classes.focusNote}>Press any key or click here to focus</p>
    </div>
  );
};

export default PracticeGame;
