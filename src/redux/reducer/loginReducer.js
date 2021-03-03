import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
};

const LoginReducer = (state = initialState, action) => {
    console.log(action.type, "kkkkk");
    switch (action.type) {
      case LOGIN_REQUEST: {
        return {
          isLoading: true,
          isSuccess: false,
        };
      }
      case LOGIN_SUCCESS: {
        return {
          isLoading: false,
          isSuccess: true,
        };
      }
      case LOGIN_FAILURE: {
        return {
          isLoading: false,
          isSuccess: false,
        };
      }
      default:
        return state;
    }
  };
  
  export default LoginReducer;