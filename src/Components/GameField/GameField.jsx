import { useGameMode } from "../../Providers/GameModeProvider";
import PracticeGame from "./PracticeGame";
import RegularGame from "./RegularGame";

const GameField = () => {
  const { gameMode } = useGameMode();

  if (gameMode === "Regular" || gameMode === "Instant Death") {
    return <RegularGame />;
  }
  return <PracticeGame />;
};

export default GameField;
