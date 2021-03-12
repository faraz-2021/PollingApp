import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Login from "./src/screen/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./src/screen/Home";


const Stack = createStackNavigator();
const user = "no user exist";
export default function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    (async () => {
      const id = await AsyncStorage.getItem("token");
      id ? setToken(id) : setToken(user);
    })();
  }, []);
  return (
    <Provider store={store}>
      {token && (
        <NavigationContainer style={styles.container}>
          <Stack.Navigator
            initialRouteName={token === user ? "Login" : "Home"}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>

          <StatusBar barStyle="light-content" style="auto" />
        </NavigationContainer>
      )}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



