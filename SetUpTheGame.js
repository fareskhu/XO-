import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from "react";
import StartGame from "./StartGame";
import GameOver from "./GameOver";

function SetUpTheGame({ playerOne, playerTwo, onReset }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isItX, setIsItX] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  function checkWinner(check) {
    const boxes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < boxes.length; i++) {
      const [a, b, c] = boxes[i];
      if (check[a] && check[a] === check[b] && check[a] === check[c]) {
        setGameOver(true);
        setWinner(check[a] === "X" ? playerOne : playerTwo);
        return;
      }
    }
    if (check.every((cell) => cell !== null)) {
      setGameOver(true);
      setWinner("Tie");
    }
  }

  function pressHandler(index) {
    if (board[index] !== null || gameOver) {
      return;
    }
    const newBoard = board.slice();
    newBoard[index] = isItX ? "X" : "O";
    setBoard(newBoard);
    setIsItX(!isItX);
    checkWinner(newBoard);
  }

  function displayOnTheSqaure(index) {
    return (
      <StartGame value={board[index]} onPress={() => pressHandler(index)} />
    );
  }

  function resetHandler() {
    setBoard(Array(9).fill(null));
    setIsItX(true);
    setGameOver(false);
    setWinner(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.playerText}>
        {playerOne} (X) vs {playerTwo} (O)
      </Text>
      <View style={styles.row}>
        {displayOnTheSqaure(0)}
        {displayOnTheSqaure(1)}
        {displayOnTheSqaure(2)}
      </View>
      <View style={styles.row}>
        {displayOnTheSqaure(3)}
        {displayOnTheSqaure(4)}
        {displayOnTheSqaure(5)}
      </View>
      <View style={styles.row}>
        {displayOnTheSqaure(6)}
        {displayOnTheSqaure(7)}
        {displayOnTheSqaure(8)}
      </View>
      <Button title="Reset Game" onPress={resetHandler} />
      {gameOver ? (
        <GameOver
          winner={winner}
          onReset={onReset}
          onPlayAgain={resetHandler}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B2D2A4",
  },
  playerText: {
    fontSize: 24,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
  },
});
export default SetUpTheGame;
