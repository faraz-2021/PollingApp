import {
  ADDUSER_REQUEST,
  ADDUSER_SUCCESS,
  ADDUSER_FAILURE,
} from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const AddUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER_REQUEST: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case ADDUSER_SUCCESS: {
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    }
    case ADDUSER_FAILURE: {
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

export default AddUserReducer;
