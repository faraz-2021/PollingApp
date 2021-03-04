import axios from "axios";
import { call, put } from "redux-saga/effects";
import { LoginSuccess, LoginFailure } from "../redux/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* Login(action) {
  if (action.user.username.length > 0 && action.user.password.length > 0) {
    try {
      const response = yield call(async () => {
        await axios
          .get(
            `https://secure-refuge-14993.herokuapp.com/login?username=${action.user.username}&password=${action.user.password}`
          )
          .then(async (res) => {
            if (res.data.error) {
              alert(res.data.data);
            } else {
              console.log(action.user.username, "llllllll");
              await AsyncStorage.setItem("token", res.data.token);
              await AsyncStorage.setItem("user", action.user.username);

              action.user.navigation.navigate("Home");
            }
          });
      });
      let user = action.user.username;
      yield put(LoginSuccess({ response: response, user: user }));
    } catch (err) {}
  } else {
    alert("Fields can't be empty");
  }
}
