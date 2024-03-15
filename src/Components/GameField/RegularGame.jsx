import { getTextsByLevel } from "../../textsHelper";

const RegularGame = () => {
  return (
    <>
      <h2>Regular Mode</h2>
      <div>
        <p>{getTextsByLevel("Easy")}</p>
      </div>
    </>
  );
};

export default RegularGame;
