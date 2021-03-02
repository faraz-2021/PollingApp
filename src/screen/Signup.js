import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Colors } from "../component/Colors";

export default function Signup(props) {
  const [text, setText] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirm, setConfirm] = useState("");

  const user = {
    "username": text,
    "password": password1,
    "role": confirm,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> User Name: </Text>

      <TextInput
        style={styles.textInput}
        onChangeText={(e) => setText(e)}
        value={text}
      />
      <Text style={styles.text}> Password: </Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        value={password1}
        onChangeText={(e) => setPassword1(e)}
      />
      <Text style={styles.text}> Role: </Text>
      <TextInput
        style={styles.textInput}
        value={confirm}
        onChangeText={(e) => setConfirm(e)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.opacityText}> Sign up </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Move}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={styles.opacityText}> Already User? Signin </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",

    borderBottomColor: "#808080",
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
  Move: {
    marginTop: 10,
  },
  opacityText: {
    color: Colors.blue,
  },
  text: {
    fontSize: 20,
  },
});
