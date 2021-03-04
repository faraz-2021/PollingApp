import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import { Colors } from "../component/Colors";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { AddUserRequest } from "../redux/action/action";
import Constants from "expo-constants";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const user = {
    username: name,
    password: password,
    role: selectedLanguage,
    setName: setName,
    setPassword: setPassword,
    setRole: setSelectedLanguage,
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        marginTop: Constants.statusBarHeight,
      }}
    >
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome name="bars" size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Add user</Text>
      </View>

      <View style={styles.innerView}>
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
        <View style={styles.textInput1}>
          <Text style={{ fontSize: 20 }}> Role</Text>

          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            style={{ height: 50, width: 150 }}
          >
            <Picker.Item label="Select role" value="0" />
            <Picker.Item label="admin" value="admin" />
            <Picker.Item label="guest" value="admin" />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.AddUser(user)}
        >
          <Text style={styles.opacityText}> Add User </Text>
          {props.isLoading ? (
            <ActivityIndicator size="small" color={Colors.red} />
          ) : null}
        </TouchableOpacity>
      </View>
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
  innerView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
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
    width: 300,
    height: 50,
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: Colors.Blue,
  },
  Move: {
    marginTop: 10,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  opacityText: {
    color: Colors.white,
    fontSize: 20,
  },
  textInput1: {
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.AddUser.isLoading,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    AddUser: (user) => dispatch(AddUserRequest(user)),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(AddUser);
