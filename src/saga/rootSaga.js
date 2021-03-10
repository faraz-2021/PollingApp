import { all, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../redux/constant/constant";
import { ADDUSER_REQUEST } from "../redux/constant/constant";
import { GET_USER } from "../redux/constant/constant";
import { GET_POLLS } from "../redux/constant/constant";
import { Login } from "../saga/loginSaga";
import { AddUser } from "../saga/AddUserSaga";
import { GetUser } from "../saga/GetUserSaga";
import { getpoll } from "../saga/getPollsaga";
import { AddPoll } from "./addPollSaga";
import { ADDPOLL_REQUEST } from "../redux/constant/constant";
import { DELETEPOLL_REQUEST } from "../redux/constant/constant";
import { deletePoll } from "./deletePollSaga";
import { updatePoll } from "./updatePollSaga";
import { UPDATE_POLL } from "../redux/constant/constant";
import { DELETE_OPTION } from "../redux/constant/constant";
import { deleteOption } from "./deleteOptionSaga";
import { ADD_OPTION } from "../redux/constant/constant";
import { addOption } from "./addOptionSaga";
import { ADD_VOTE } from "../redux/constant/constant";
import { addVote } from "./addVoteSaga";

function* watchMan() {
  yield takeLatest(LOGIN_REQUEST, Login);
  yield takeLatest(ADDUSER_REQUEST, AddUser);
  yield takeLatest(GET_USER, GetUser);
  yield takeLatest(ADDPOLL_REQUEST, AddPoll);
  yield takeLatest(GET_POLLS, getpoll);
  yield takeLatest(DELETEPOLL_REQUEST, deletePoll);
  yield takeLatest(UPDATE_POLL, updatePoll);
  yield takeLatest(DELETE_OPTION, deleteOption);
  yield takeLatest(ADD_OPTION, addOption);
  yield takeLatest(ADD_VOTE, addVote);
}
export default function* rootSaga() {
  yield all([watchMan()]);
}
