import axios from "axios";
import { call, put } from "redux-saga/effects";
import { UserReceived } from "../redux/action/action";
import { environment } from "../../envrionment";

export function* GetUser(action) {
  try {
    const response = yield call(async () => {
      const res = await axios.get(`${environment.apiBase}/list_users`);
      return res;
    });
    let result = response.data.data;
    yield put(UserReceived(result));
  } catch (err) {
    console.error(err);
  }
}
