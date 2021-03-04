import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const LoginReducer = (state = initialState, action) => {
  console.log(action.type, "kkkkk");
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
