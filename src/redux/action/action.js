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
  export const LoginSuccess = (user) => {
    return {
      type: LOGIN_SUCCESS,
      user,
    };
  };
  export const LoginFailure = (user) => {
    return {
      type: LOGIN_FAILURE,
      user,
    };
  };
 