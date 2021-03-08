import {
    ADDPOLL_REQUEST,
    ADDPOLL_SUCCESS,
    ADDPOLL_FAILURE,
  } from "../constant/constant";
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
  };
  
  const AddPollReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDPOLL_REQUEST: {
        return {
          isLoading: true,
          isSuccess: false,
          isError: false,
        };
      }
      case ADDPOLL_SUCCESS: {
        return {
          isLoading: false,
          isSuccess: true,
          isError: false,
        };
      }
      case ADDPOLL_FAILURE: {
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
  
  export default AddPollReducer;
  