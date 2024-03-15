import Header from "./Components/Header/Header";
import GameField from "./Components/GameField/GameField";
import { StyledEngineProvider } from "@mui/material";

const MainPage = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Header />
        <GameField />
      </StyledEngineProvider>
    </>
  );
};

export default MainPage;
