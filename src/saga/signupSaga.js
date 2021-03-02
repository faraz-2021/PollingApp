import axios from "axios";
import { call, put } from "redux-saga/effects";
import { SignupSuccess, SignupFailure } from "../Actions/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* Signup(action) {
    try {
      const response = yield call(async () => {
        await axios
          .post(`${environment.apiBase}/brand/login`, action.user)
          .then(async (res) => {
            // await AsyncStorage.setItem("token", res.headers.token);
          });
      });
  
      if (response) {
        yield put(SignupSuccess({ response: response }));
      } else {
        yield put(SignupFailure({ error: "invalid user" }));
      }
    } catch (err) {
      yield put(LoginFailure({ error: "invalid user" }));
    }
  }