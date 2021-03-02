import { all, takeLatest } from "redux-saga/effects";
import { SIGNUP_REQUEST } from "../redux/constant/constant";
import { Signup } from "./signupSaga";
function* watchMan() {
  yield takeLatest(SIGNUP_REQUEST, Signup);
}
export default function* rootSaga() {
  yield all([watchMan()]);
}