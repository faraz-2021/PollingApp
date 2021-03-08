import { combineReducers } from "redux";
import LoginReducer from "../reducer/loginReducer";
import AddUserReducer from "../reducer/AddUserReducer";
import GetUserReducer from "../reducer/GetUserReducer";
import getPollReducer from "../reducer/getPollReducer";
import AddPollReducer from '../reducer/addPollReducer';


const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  AddUser: AddUserReducer,
  GetUser: GetUserReducer,
  GetPoll:getPollReducer,
  AddPoll:AddPollReducer
});

export default rootReducer;
