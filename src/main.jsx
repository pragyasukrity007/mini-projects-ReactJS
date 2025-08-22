import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Accordian from "./components/accordian/index.jsx";
import RandomColor from "./components/random-color-generator/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
import TicTacToe from "./components/tic-tac-toe/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Accordian />
    <RandomColor />
    <StarRating />
    <TicTacToe />
  </StrictMode>
);
