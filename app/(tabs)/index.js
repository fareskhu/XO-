import SetUpTheGame from "../../SetUpTheGame";
import { useState } from "react";
import InputNames from "../../InputNames";

export default function App() {
  const [players, setPlayers] = useState("");

  function startTheGame(playerOne, playerTwo) {
    setPlayers({ playerOne, playerTwo });
  }

  function resetGame() {
    setPlayers("");
  }
  return players ? (
    <SetUpTheGame
      playerOne={players.playerOne}
      playerTwo={players.playerTwo}
      onReset={resetGame}
    />
  ) : (
    <InputNames onStart={startTheGame} />
  );
}
