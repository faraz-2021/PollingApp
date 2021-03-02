import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from "../constant/type";
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
  export const SignupRequest = (user) => {
    return {
      type: SIGNUP_REQUEST,
      user,
    };
  };
  export const SignupSuccess = (user) => {
    return {
      type: SIGNUP_SUCCESS,
      user,
    };
  };
  export const SignupFailure = (user) => {
    return {
      type: SIGNUP_FAILURE,
      user,
    };
  };