import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  addPollSucces,
  addPollFailure,
  getPolls,
} from "../redux/action/action";
import { GET_POLLS } from "../redux/constant/constant";
import { environment } from "../../envrionment";

export function* AddPoll(action) {
  let option = "";
  action.user.options.forEach((a, index) => {
    option = option.concat(!index ? a.title : `____${a.title}`);
  });
  let response = "";
  if (action.user.title.length > 0 && option.length > 0) {
    try {
      yield call(async () => {
        await axios
          .get(
            `${environment.apiBase}/add_poll?title=${action.user.title}%20&options=${option}`
          )
          .then(async (res) => {
            response = res;
            alert("Poll added successfully");
            action.user.setPoll(null);
            action.user.setOption(null)
          });
      });

      yield put({ type: GET_POLLS, getPolls });

      if (response) {
        yield put(addPollSucces(response));
      } else {
        yield put(addPollFailure({ error: "invalid user" }));
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    alert("Poll & Options can't be empty");
    yield put(addPollFailure({ err: "invalid user" }));
  }
}
