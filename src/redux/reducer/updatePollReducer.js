import { UPDATE_POLL, POLL_UPDATED } from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const UpdatePollReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POLL: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case POLL_UPDATED: {
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

export default UpdatePollReducer;
