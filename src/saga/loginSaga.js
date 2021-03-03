import axios from "axios";
import { call, put } from "redux-saga/effects";
import { LoginSuccess, LoginFailure } from "../redux/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* Login(action) {
  if (action.user.username.length > 0 && action.user.password.length > 0) {
    try {
      yield call(async () => {
        await axios
          .get(
            `https://secure-refuge-14993.herokuapp.com/login?username=${action.user.username}&password=${action.user.password}`
          )
          .then(async (res) => {
            if (res.data.error) {
              alert(res.data.data);
            } else {
              await AsyncStorage.setItem("token", res.data.token);
              action.user.navigation.navigate("Home");
            }
          });
      });
    } catch (err) {}
  } else {
    alert("Fields can't be empty");
  }
}
