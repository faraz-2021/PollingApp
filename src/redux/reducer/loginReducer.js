import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: "",
};

const LoginReducer = (state = initialState, action) => {
  console.log(action.type, "kkkkk");
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        data: "",
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.user,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        data: action.user.username,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
