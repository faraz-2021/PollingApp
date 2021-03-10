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
  UPDATE_POLL,
  POLL_UPDATED,
  OPTION_DELETED,
  DELETE_OPTION,
  OPTION_ADDED,
  ADD_OPTION,
  VOTE_ADDED,
  ADD_VOTE,
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

export const updatePoll = (user) => {
  return {
    type: UPDATE_POLL,
    user,
  };
};

export const pollUpdated = () => {
  return {
    type: POLL_UPDATED,
  };
};



export const deleteOption = (user) => {
  return {
    type: DELETE_OPTION,
    user,
  };
};
export const optionDeleted = () => {
  return {
    type: OPTION_DELETED,
  };
};


export const addOption =(user)=>{
  return{
    type:ADD_OPTION,
    user,
  }
}

export const optionAdded = () =>{
  return{
    type:OPTION_ADDED,
  }
}

export const addVote = (user)=>{
  return{
    type:ADD_VOTE,
    user,
  }
}

export const voteAdded = ()=>{
  return{
    type:VOTE_ADDED,
  }
}