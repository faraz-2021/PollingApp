import axios from "axios";
import { call, put } from "redux-saga/effects";
import { GettingUser } from "../redux/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* GetUser(action) {
  try {
    const response = yield call(async () => {
      const res = await axios.get(
        `https://secure-refuge-14993.herokuapp.com/list_users`
      );
      return res;
    });
    let result = response.data.data;
    yield put(GettingUser(result));
  } catch (err) {
    console.error(err);
  }
}
