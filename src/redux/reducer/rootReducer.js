import { combineReducers } from "redux";
import LoginReducer from "../reducer/loginReducer";
import AddUserReducer from '../reducer/AddUserReducer';

const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  AddUser:AddUserReducer,
});

export default rootReducer;
