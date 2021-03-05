import { combineReducers } from "redux";
import LoginReducer from "../reducer/loginReducer";
import AddUserReducer from "../reducer/AddUserReducer";
import GetUserReducer from "../reducer/GetUserReducer";

const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  AddUser: AddUserReducer,
  GetUser: GetUserReducer,
});

export default rootReducer;
