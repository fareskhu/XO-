import { View, Text, Modal, Button, StyleSheet } from "react-native";

const GameOver = ({ winner, onReset, onPlayAgain }) => {
  const message = winner === "Tie" ? "It's a tie!" : `${winner} wins!`;

  return (
    <Modal transparent={true} animationType="slide" visible={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{message}</Text>
          <Button title="Play Again" onPress={onPlayAgain} />
          <Button title="Reset Game" onPress={onReset} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GameOver;
