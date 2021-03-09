import axios from "axios";
import { call, put } from "redux-saga/effects";
import { pollUpdated, getPolls } from "../redux/action/action";
import { GET_POLLS } from "../redux/constant/constant";
import { environment } from "../../envrionment";

export function* updatePoll(action) {
  if (action.user.title.length > 0 && action.user.id.length > 0) {
    try {
      const response = yield call(async () => {
        const result = await axios.get(
          `${environment.apiBase}/update_poll_title?id=${action.user.id}&title=${action.user.title}`
        );
        return result;
      });
      if (response.data.error) {
        alert(response.data.data);
      } else {
        alert("Poll title updated successfully.");
        yield put({ type: GET_POLLS, getPolls });
        yield put(pollUpdated(response));
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    alert("Poll can't be empty");
  }
}
