import { all, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../redux/constant/constant";
import { ADDUSER_REQUEST } from "../redux/constant/constant";
import { Login } from "../saga/loginSaga";
import {AddUser} from '../saga/AddUserSaga';
function* watchMan() {
  yield takeLatest(LOGIN_REQUEST, Login);
  yield takeLatest(ADDUSER_REQUEST, AddUser);

}
export default function* rootSaga() {
  yield all([watchMan()]);
}
