import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./MainPage.jsx";
import "./index.css";
import { DialogProvider } from "./Providers/DialogProvider.jsx";
import { GameModeProvider } from "./Providers/GameModeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameModeProvider>
      <DialogProvider>
        <MainPage />
      </DialogProvider>
    </GameModeProvider>
  </React.StrictMode>
);
