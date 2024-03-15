import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header.jsx";
import "./index.css";
import GameField from "./Components/GameField/GameField.jsx";
import { DialogProvider } from "./Providers/DialogProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DialogProvider>
      <Header />
      <GameField />
    </DialogProvider>
  </React.StrictMode>
);
