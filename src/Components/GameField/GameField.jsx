import { useGameMode } from "../../Providers/GameModeProvider";
import InstantDeathGame from "./InstantDeathGame";
import PracticeGame from "./PracticeGame";
import RegularGame from "./RegularGame";

const GameField = () => {
  const { gameMode } = useGameMode();
  switch (gameMode) {
    case "Regular":
      return <RegularGame />;
    case "Instant Death":
      return <InstantDeathGame />;
    case "Practice":
      return <PracticeGame />;
  }
};

export default GameField;
