import axios from "axios";
import { call, put } from "redux-saga/effects";
import { optionAdded, getPolls } from "../redux/action/action";
import { GET_POLLS } from "../redux/constant/constant";
import { environment } from "../../envrionment";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function* addVote(action) {
  if (action.user.option.length > 0 && action.user.id.length > 0) {
    try {
      const response = yield call(async () => {
        let myToken = await AsyncStorage.getItem("token");

        const result = await axios.get(
          `${environment.apiBase}/do_vote?id=${action.user.id}&option_text=${action.user.option}`,
          {
            headers: {
              access_token: myToken,
            },
          }
        );
        return result;
      });
      if (response.data.error) {
        alert(response.data.data);
      } else {
        alert("Voted successfully.");
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
