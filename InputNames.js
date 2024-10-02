import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const InputNames = ({ onStart }) => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  function handleStart() {
    if (playerOne && playerTwo) {
      onStart(playerOne, playerTwo);
    } else {
      alert("Please enter both names");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Player One (X):</Text>
      <TextInput
        style={styles.input}
        value={playerOne}
        onChangeText={setPlayerOne}
      />
      <Text style={styles.label}>Player Two (O):</Text>
      <TextInput
        style={styles.input}
        value={playerTwo}
        onChangeText={setPlayerTwo}
      />
      <Button title="Start Game" onPress={handleStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#B2D2A4",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
});

export default InputNames;
