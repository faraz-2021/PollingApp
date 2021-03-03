import { combineReducers } from "redux";
import LoginReducer from "../reducer/loginReducer";

const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
});

export default rootReducer;
