import { TouchableOpacity, Text, StyleSheet } from "react-native";

function StartGame({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.squares} onPress={onPress}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  squares: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  squareText: {
    fontSize: 32,
  },
});

export default StartGame;
