import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header.jsx";
import "./index.css";
import GameField from "./Components/GameField/GameField.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <GameField />
  </React.StrictMode>
);
