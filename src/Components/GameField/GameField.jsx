import texts from "../../assets/gameTexts.json";
import { useGameMode } from "../../Providers/GameModeProvider";

const GameField = () => {
  const { gameMode } = useGameMode();
  console.log(texts.texts);
  return <>{gameMode}</>;
};

export default GameField;
