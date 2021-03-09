import axios from "axios";
import { call, put } from "redux-saga/effects";
import { deletePollSuccess, getPolls } from "../redux/action/action";
import { GET_POLLS } from "../redux/constant/constant";
import { environment } from "../../envrionment";

export function* deletePoll(action) {
  try {
    const response = yield call(async () => {
      const result = await axios.get(
        `${environment.apiBase}/delete_poll?id=${action.user}`
      );
      return result;
    });
    if (response.data.error) {
      alert(response.data.data);
    } else {
      alert("Poll removed sucessfully");
      yield put({ type: GET_POLLS, getPolls });
      yield put(deletePollSuccess({ message: "Poll removed" }));
    }
  } catch (err) {
    console.error(err);
  }
}
