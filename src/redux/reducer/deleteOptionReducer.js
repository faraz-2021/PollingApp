import { OPTION_DELETED, DELETE_OPTION } from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const deleteOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_OPTION: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case OPTION_DELETED: {
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

export default deleteOptionReducer;
