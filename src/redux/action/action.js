import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADDUSER_REQUEST,
  ADDUSER_SUCCESS,
  ADDUSER_FAILURE,
  GET_USER,
  USER_RECIEVED,
  GET_POLLS,
  POLLS_RECIEVED,
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
export const AddUserRequest = (user) => {
  return {
    type: ADDUSER_REQUEST,
    user,
  };
};
export const AddUserSuccess = () => {
  return {
    type: ADDUSER_SUCCESS,
  };
};
export const AddUserFailure = () => {
  return {
    type: ADDUSER_FAILURE,
  };
};

export const GetUser = () => {
  return {
    type: GET_USER,
  };
};

export const UserReceived = (user) => {
  return {
    type: USER_RECIEVED,
    user,
  };
};

export const getPolls = () => {
  return {
    type: GET_POLLS,
  };
};

export const pollsReceived = (user) => {
  return {
    type: POLLS_RECIEVED,
    user,
  };
};
