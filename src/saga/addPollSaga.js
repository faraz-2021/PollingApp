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
  let response = "";
  if (action.user.title.length > 0 && action.user.options.length > 0) {
    let option = "";
    action.user.options.forEach((a, index) => {
      option = option.concat(!index ? a.title : `____${a.title}`);
    });
    try {
      yield call(async () => {
        await axios
          .get(
            `${environment.apiBase}/add_poll?title=${action.user.title}&options=${option}`
          )
          .then(async (res) => {
            response = res;
            alert("Poll added successfully");
            action.user.setPoll('');
            action.user.setOption([]);
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
