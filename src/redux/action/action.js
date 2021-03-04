import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constant/constant";
export const LoginRequest = (user) => {
  return {
    type: LOGIN_REQUEST,
    user,
  };
};
export const LoginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    
  };
};
export const LoginFailure = () => {
  return {
    type: LOGIN_FAILURE,
    
  };
};
