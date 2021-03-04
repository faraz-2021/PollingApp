import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../component/Colors";
import { LoginRequest } from "../redux/action/action";
import { connect } from "react-redux";

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: name,
    password: password,
    navigation: props.navigation,
  };

  return (
    <View style={styles.Main}>
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        value={name}
        onChangeText={(e) => setName(e)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />

      <TouchableOpacity style={styles.button} onPress={() => props.Login(user)}>
        <Text style={styles.opacityText}> Sign In </Text>
      </TouchableOpacity>
      {props.isLoading ? (
        <ActivityIndicator size="small" color={Colors.red} />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: Colors.Blue,
  },
  Move: {
    marginTop: 10,
  },
  opacityText: {
    color: Colors.white,
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.LoginReducer.isLoading,
    isError: state.LoginReducer.isError,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    Login: (user) => dispatch(LoginRequest(user)),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(Login);
