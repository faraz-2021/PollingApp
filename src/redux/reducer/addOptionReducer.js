import { ADD_OPTION, OPTION_ADDED } from "../constant/constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const addOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPTION: {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    }
    case OPTION_ADDED: {
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

export default addOptionReducer;
