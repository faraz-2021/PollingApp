import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  addPollSucces,
  addPollFailure,
  getPolls,
} from "../redux/action/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GET_POLLS } from "../redux/constant/constant";
import { environment } from "../../envrionment";

export function* AddPoll(action) {
  let option = "";
  action.user.options.forEach((a, index) => {
    option = option.concat(!index ? a.title : `____${a.title}`);
  });
  console.log(option, "fljflksajfl");
  let token = "";
  if (action.user.title) {
    try {
      yield call(async () => {
        await axios
          .get(
            `${environment.apiBase}/add_poll?title=${action.user.title}%20polll&options=${option}`
          )
          .then(async (res) => {
            console.log(res, "respomsnskjs");

            token = await AsyncStorage.getItem("token");
          });
      });
      yield put({ type: GET_POLLS, getPolls });

      if (token) {
        yield put(addPollSucces(token));
      } else {
        yield put(addPollFailure({ error: "invalid user" }));
      }
    } catch (err) {
      yield put(addPollFailure({ err: "invalid user" }));
    }
  } else {
    alert("Poll can't be empty");
  }
}
