import { combineReducers } from "redux";
import LoginReducer from "../reducer/loginReducer";
import AddUserReducer from "../reducer/AddUserReducer";
import GetUserReducer from "../reducer/GetUserReducer";
import getPollReducer from "../reducer/getPollReducer";


const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  AddUser: AddUserReducer,
  GetUser: GetUserReducer,
  GetPoll:getPollReducer,
});

export default rootReducer;
