import axios from "axios";
import { call, put } from "redux-saga/effects";
import { LoginSuccess, LoginFailure } from "../redux/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "../../envrionment";


export function* Login(action) {
  if (action.user.username.length > 0 && action.user.password.length > 0) {
    try {
       yield call(async () => {
        await axios
          .get(
            `${environment.apiBase}/login?username=${action.user.username}&password=${action.user.password}`
          )
          .then(async (res) => {
            if (res.data.error) {
              alert(res.data.data);
            } else {
              await AsyncStorage.setItem("token", res.data.token);
              await AsyncStorage.setItem("user", action.user.username);

              action.user.navigation.navigate("Home");
            }
            Token = await AsyncStorage.getItem("token");
          });
      });
      if (Token) {
        yield put(LoginSuccess(Token));
      } else {
        yield put(LoginFailure({ error: "invalid user" }));
      }
    } catch (err) {
      yield put(LoginFailure({ err: "invalid user" }));
    }
  } else {
    alert("Fields can't be empty");
    yield put(LoginFailure({ error: "invalid user" }));
  }
}
