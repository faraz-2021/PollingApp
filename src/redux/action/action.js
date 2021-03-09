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
  ADDPOLL_REQUEST,
  ADDPOLL_SUCCESS,
  ADDPOLL_FAILURE,
  DELETEPOLL_REQUEST,
  DELETEPOLL_SUCCESS,
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

export const addPoll = (user) => {
  return {
    type: ADDPOLL_REQUEST,
    user,
  };
};
export const addPollSucces = () => {
  return {
    type: ADDPOLL_SUCCESS,
  };
};
export const addPollFailure = () => {
  return {
    type: ADDPOLL_FAILURE,
  };
};

export const deletePoll = (user) => {
  return {
    type: DELETEPOLL_REQUEST,
    user,
  };
};

export const deletePollSuccess = () => {
  return {
    type: DELETEPOLL_SUCCESS,
  };
};
