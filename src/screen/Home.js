import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = (props) => {
  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={clearAsyncStorage} style={styles.button}>
        <Text>sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
