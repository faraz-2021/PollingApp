import axios from "axios";
import { call, put } from "redux-saga/effects";
import { optionAdded, getPolls } from "../redux/action/action";
import { GET_POLLS } from "../redux/constant/constant";
import { environment } from "../../envrionment";

export function* addOption(action) {
  if (action.user.title.length > 0 && action.user.id.length > 0) {
    try {
      const response = yield call(async () => {
        const result = await axios.get(
          `${environment.apiBase}/add_new_option?id=${action.user.id}&option_text=${action.user.title}`
        );
        return result;
      });
      if (response.data.error) {
        alert(response.data.data);
      } else {
        alert("Option Added successfully.");
        yield put({ type: GET_POLLS, getPolls });
        yield put(optionAdded(response));
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    alert("Option can't be empty");
  }
}

