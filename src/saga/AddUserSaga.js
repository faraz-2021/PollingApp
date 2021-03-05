import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  AddUserSuccess,
  AddUserFailure,
  GetUser,
} from "../redux/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_USER } from "../redux/constant/constant";
import { environment } from "../../envrionment";

export function* AddUser(action) {
  let token = "";
  if (
    action.user.username.length > 0 &&
    action.user.password.length > 0 &&
    action.user.role.length > 1
  ) {
    try {
      yield call(async () => {
        await axios
          .get(
            `${environment.apiBase}/add_user?username=${action.user.username}&password=${action.user.password}&role=${action.user.role}`
          )
          .then(async (res) => {
            if (res.data.error) {
              alert(res.data.message);
              action.user.setName(null);
              action.user.setPassword(null);
              action.user.setRole(null);
            } else {
              alert("user added succefully");
              action.user.setName(null);
              action.user.setPassword(null);
              action.user.setRole(null);
            }

            token = await AsyncStorage.getItem("token");
          });
      });
      yield put({ type: GET_USER, GetUser });
      if (token) {
        yield put(AddUserSuccess(token));
      } else {
        yield put(AddUserFailure({ error: "invalid user" }));
      }
    } catch (err) {
      yield put(AddUserFailure({ err: "invalid user" }));
    }
  } else {
    alert("Fields can't be empty");
    yield put(AddUserFailure({ error: "invalid user" }));
  }
}
