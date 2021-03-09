import { DELETEPOLL_REQUEST, DELETEPOLL_SUCCESS } from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const DeletePollReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETEPOLL_REQUEST: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case DELETEPOLL_SUCCESS: {
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    }

    default:
      return state;
  }
};

export default DeletePollReducer;
