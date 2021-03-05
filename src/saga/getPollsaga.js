import axios from "axios";
import { call, put } from "redux-saga/effects";
import { pollsReceived } from "../redux/action/action";
import { environment } from "../../envrionment";

export function* getpoll(action) {
  try {
    const response = yield call(async () => {
      const res = await axios.get(`${environment.apiBase}/list_polls`);
      return res;
    });

    let result = response.data.data;
    yield put(pollsReceived(result));
  } catch (err) {
    console.error(err);
  }
}
