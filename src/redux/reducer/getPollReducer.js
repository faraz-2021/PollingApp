import { GET_POLLS, POLLS_RECIEVED } from "../constant/constant";

const initialState = {
  isLoading: false,

  data: {},
};

const getPollReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POLLS: {
      return {
        isLoading: true,

        data: {},
      };
    }
    case POLLS_RECIEVED: {
      return {
        isLoading: false,

        data: action.user,
      };
    }
    default:
      return state;
  }
};

export default getPollReducer;
