import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");



  return (
    <View style={styles.Main}>
      <Text style={styles.text}> User Name: </Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <Text style={styles.text}> Password: </Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.opacityText}> Sign In </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",

    borderBottomColor: "#808080",
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    width: 250,
    borderWidth: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 20,
    marginTop: 15,
  },
});
