import { combineReducers } from "redux";
import LoginReducer from "../reducer/loginReducer";
import AddUserReducer from "../reducer/AddUserReducer";
import GetUserReducer from "../reducer/GetUserReducer";
import getPollReducer from "../reducer/getPollReducer";
import AddPollReducer from "../reducer/addPollReducer";
import DeletePollReducer from "./deletePollReducer";
import UpdatePollReducer from "./updatePollReducer";
import deleteOptionReducer from './deleteOptionReducer';
import addOptionReducer from './addOptionReducer';

const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  AddUser: AddUserReducer,
  GetUser: GetUserReducer,
  GetPoll: getPollReducer,
  AddPoll: AddPollReducer,
  DeletePoll: DeletePollReducer,
  UpdatePoll: UpdatePollReducer,
  DeleteOption: deleteOptionReducer,
  AddOption:addOptionReducer
});

export default rootReducer;
