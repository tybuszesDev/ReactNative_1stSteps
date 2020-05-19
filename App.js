import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Lukasz");
  const [person, setPerson] = useState({ name: "Tomek", age: 25 });

  const handleButton = () => {
    setName("Roman");
    setPerson({ name: "filip", age: 45 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={handleButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
