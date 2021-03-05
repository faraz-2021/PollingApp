import { all, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../redux/constant/constant";
import { ADDUSER_REQUEST } from "../redux/constant/constant";
import { GET_USER } from "../redux/constant/constant";
import { Login } from "../saga/loginSaga";
import { AddUser } from "../saga/AddUserSaga";
import { GetUser } from "../saga/GetUserSaga";

function* watchMan() {
  yield takeLatest(LOGIN_REQUEST, Login);
  yield takeLatest(ADDUSER_REQUEST, AddUser);
  yield takeLatest(GET_USER, GetUser);
}
export default function* rootSaga() {
  yield all([watchMan()]);
}
