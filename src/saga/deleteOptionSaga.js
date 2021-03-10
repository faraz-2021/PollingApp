import axios from "axios";
import { call, put } from "redux-saga/effects";
import { optionDeleted, getPolls } from "../redux/action/action";
import { GET_POLLS } from "../redux/constant/constant";
import { environment } from "../../envrionment";

export function* deleteOption(action) {
  if (action.user.option.length > 0 && action.user.id.length > 0) {
    try {
      const response = yield call(async () => {
        const result = await axios.get(
          `${environment.apiBase}/delete_poll_option?id=${action.user.id}&option_text=${action.user.option}`
        );
        return result;
      });
      if (response.data.error) {
        alert(response.data.data);
      } else {
        alert("Option deleted successfully.");
        yield put({ type: GET_POLLS, getPolls });
        yield put(optionDeleted(response));
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    alert("Poll can't be empty");
  }
}
