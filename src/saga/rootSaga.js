import { all, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../redux/constant/constant";
import { Login } from "../saga/loginSaga";
function* watchMan() {
  yield takeLatest(LOGIN_REQUEST, Login);
}
export default function* rootSaga() {
  yield all([watchMan()]);
}
