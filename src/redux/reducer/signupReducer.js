import { SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAILURE } from "../constant/type";

const initialState = {
  isLoading: false,
  isSuccess: false,
};

const SignupReducer = (state = initialState, action) => {
    console.log(action.type, "kkkkk");
    switch (action.type) {
      case SIGNUP_REQUEST: {
        return {
          isLoading: true,
          isSuccess: false,
        };
      }
      case SIGNUP_SUCCESS: {
        return {
          isLoading: false,
          isSuccess: true,
        };
      }
      case SIGNUP_FAILURE: {
        return {
          isLoading: false,
          isSuccess: false,
        };
      }
      default:
        return state;
    }
  };
  
  export default SignupReducer;